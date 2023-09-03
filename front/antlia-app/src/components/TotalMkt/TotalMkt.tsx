import { HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Pressable, Box, Button, FormControl, Input, VStack } from "native-base";
import { Alert, Modal, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../theme";

interface TotalMktProps{
    subtotal:number;
}

export const TotalMkt: React.FC<TotalMktProps> = ({subtotal})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(15);

    useEffect(() => {
        let interval: any;
        if(modalVisible){
            interval = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
        }
        return() => clearInterval(interval);
    }, [modalVisible]);

    useEffect(() => {
        if( count === 0 ){
            setModalVisible(false);
            setCount(15);
        }
    }, [count]);
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        setCount(15);
                    }}>
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        activeOpacity={1}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        />
                        <Box
                            w="60%"
                            h="40%"
                            bg={theme.colors.white}
                            marginX={"15%"}
                            marginY={"20%"}
                            rounded={30}
                            alignItems={"center"}
                            justifyContent={"space-around"}>
                            <VStack alignItems={"center"} w='80%'>
                                <Text fontSize={20} fontFamily={theme.fonts.bold} textAlign={'center'} mb='5%' >
                                    0:{count}
                                </Text>
                                <Image w='220' h='200' source={require('../../assets/handsCard.png')} />
                                <Text fontSize={18} fontFamily={theme.fonts.bold} textAlign={'center'} mt='10%' >
                                    APROXIME O SEU CARTÃO NO LEITOR PARA CONFIRMAR {'\n'} A SUA COMPRA
                                </Text>
                                {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                    <Text>X</Text>
                                </Pressable> */}
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                </Modal>
                <HStack bg={theme.colors.white} alignItems={'center'} justifyContent={'space-around'} h='100px'>
                    <Text color={theme.colors.textPrimary} fontSize={20} style={{ fontFamily: 'Rubik_400Regular' }}>
                        TOTAL
                    </Text>
                    <Text fontSize={25} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                    R$ {subtotal.toFixed(2).toString()}
                    </Text>
                </HStack>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Box bg={theme.colors.primary} h='100px' alignItems={'center'} justifyContent={'center'}  >
                        <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25" >
                            CONFIRMAR COMPRA
                        </Text>
                    </Box>
                </Pressable>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}
