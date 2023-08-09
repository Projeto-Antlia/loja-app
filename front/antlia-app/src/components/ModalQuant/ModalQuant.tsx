import { HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Pressable, Box, Button, FormControl, Input, VStack, ScrollView } from "native-base";
import { Alert, Modal, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { ItnConfirmation } from "../ItnConfirmation/ItnConfirmation";


const coquinha = 'https://cbissn.ibict.br/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1'

export default function ModalQuant() {
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
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        activeOpacity={1}
                    // onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        />
                        <Button onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{color: theme.colors.white}}>
                               X
                            </Text>
                        </Button>
                        <Box
                            py="3%"
                            w="80%"
                            h="40%"
                            bg={theme.colors.white}
                            marginX={"15%"}
                            marginY={"20%"}
                            rounded={30}
                            alignItems={"center"}
                            justifyContent={"space-around"}>

                            <VStack alignItems={"center"} w='80%'>
                                <ScrollView>
                                    <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                                    <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                                    <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                                    {/* <Text fontSize={20} fontFamily={theme.fonts.bold} textAlign={'center'} mb='5%' >
                                    ttt
                                </Text> */}
                                    {/* <Image w='220' h='200' source={require('../../assets/handsCard.png')} /> */}
                                    {/* <Text fontSize={18} fontFamily={theme.fonts.bold} textAlign={'center'} mt='10%' >
                                    APROXIME O SEU CARTÃO NO LEITOR PARA CONFIRMAR {'\n'} A SUA COMPRA
                                </Text> */}
                                </ScrollView>
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                </Modal>

                <Pressable onPress={() => setModalVisible(true)}>
                    <Box bg={'red'} h='100px' alignItems={'center'} justifyContent={'center'}  >
                        <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25" >
                            CARD Quantidade
                        </Text>
                    </Box>
                </Pressable>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}
