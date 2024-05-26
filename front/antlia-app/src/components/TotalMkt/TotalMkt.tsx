import { HStack, KeyboardAvoidingView, NativeBaseProvider, Text,  Pressable, Box } from "native-base";
import React, { useState } from "react";
import theme from "../../theme";
import { ModalAuth } from "../ModalAuth/ModalAuth";
import { screenType } from "./type";

interface TotalMktProps{
    subtotal:number;
    onPlaceOrder: () => void;
}

export const TotalMkt: React.FC<TotalMktProps> = ({subtotal, onPlaceOrder})=>{
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);

    };

    const closeModal = () => {
        setModalVisible(false);
    };



   
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView>
                
                <HStack bg={theme.colors.white} alignItems={'center'} justifyContent={'space-around'} h='100px'>
                    <Text color={theme.colors.textPrimary} fontSize={20} style={{ fontFamily: 'Rubik_400Regular' }}>
                        TOTAL
                    </Text>
                    <Text fontSize={25} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                    R$ {subtotal.toFixed(2).toString()}
                    </Text>
                </HStack>
                <Pressable onPress={openModal}>
                        <Box bg={theme.colors.primary} h='100px' alignItems={'center'} justifyContent={'center'} >
                            <Text p='5' color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25">CONFIRMAR COMPRA</Text>
                            <ModalAuth
                                isVisible={modalVisible}
                                onClose={closeModal}
                                onConfirmation={onPlaceOrder}
                                statusScreen={screenType.CART}
                                 />
                        </Box>
                    </Pressable>


                <Pressable onPress={onPlaceOrder}>
                <Box bg={theme.colors.primary} h='100px' alignItems={'center'} justifyContent={'center'}>
                    <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25">
                        CONFIRMAR COMPRA
                    </Text>
                </Box>
                </Pressable>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}
