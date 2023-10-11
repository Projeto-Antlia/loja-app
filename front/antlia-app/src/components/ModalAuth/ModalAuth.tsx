import { KeyboardAvoidingView, Text, Pressable, Box, VStack } from "native-base";
import { Alert, Modal, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import theme from "../../theme";


interface ModalAuthProps {
    isVisible: boolean
    name: string
    image: string
    price: string | undefined
    quantidade: string | undefined
    onClose: () => void
};

export const ModalAuth: React.FC<ModalAuthProps> = ({
    isVisible,
    onClose,
}) => {

    return (
        <KeyboardAvoidingView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}>
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    activeOpacity={1}>
                    <View style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }} />
                    <Box
                        w="75%"
                        h='25%'
                        bg={theme.colors.white}
                        rounded={30}
                        alignItems={"center"}>
                        <VStack px='5%' py='5%' w='100%' alignItems={"center"} >
                            <Pressable onPress={onClose}>
                                <Text>X</Text>
                            </Pressable>
                            <Text fontFamily={theme.fonts.semiBold} fontSize='20'>Selecione a quantidade desejada</Text>
                            <Pressable justifyContent={'center'} rounded={'10'} h='20%' alignItems={"center"} w='100%' bg={theme.colors.primary} mt='30%' onPress={() => window.alert("compra adicionada ao carrinho")}>
                                <Text fontFamily={theme.fonts.semiBold} fontSize='15'>
                                    ADICIONAR
                                </Text>
                            </Pressable>
                        </VStack>
                    </Box>
                </TouchableOpacity>
            </Modal>
        </KeyboardAvoidingView>
    )
}
