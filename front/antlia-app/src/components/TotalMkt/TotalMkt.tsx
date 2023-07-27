import { HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Pressable, Box, Button, FormControl, Input, VStack } from "native-base";
import { Alert, Modal } from "react-native";
import React, { useState } from "react";
import theme from "../../theme";


export default function TotalMkt() {
    const [modalVisible, setModalVisible] = useState(false);
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
                    }}>
                    <Box w='70%' h='50%' bg={theme.colors.white} marginX={'15%'} marginY={'20%'} rounded={30} alignItems={"center"} justifyContent={'space-around'}>
                        <VStack alignItems={"center"} w='80%'>
                            <Image source={require('../../assets/handsCard.png')} />
                            <Text  fontSize={20} fontFamily={theme.fonts.bold} textAlign={'center'} >
                                APROXIME O SEU CARTÃO NO LEITOR PARA CONFIRMAR {'\n'} A SUA COMPRA
                            </Text>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Text>X</Text>
                            </Pressable>
                        </VStack>
                    </Box>
                </Modal>
                <HStack bg={theme.colors.white} alignItems={'center'} justifyContent={'space-around'} h='100px'>
                    <Text color={theme.colors.textPrimary} fontSize={20} style={{ fontFamily: 'Rubik_400Regular' }}>
                        TOTAL
                    </Text>
                    <Text fontSize={25} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                        R$: 17,50
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
