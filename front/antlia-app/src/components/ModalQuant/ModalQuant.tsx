import { KeyboardAvoidingView, Text, Pressable, Box, VStack } from "native-base";
import { Alert, Modal, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import theme from "../../theme";
import { ItnConfirmation } from "../ItnConfirmation/ItnConfirmation";

const newLocal = 'https://cbissn.ibict.br/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1';
const coquinha = newLocal;

interface ModalQuantProps {
    isVisible: true
    name: string
    image: string
    price: string | undefined
    quantidade: string | undefined
    closeModal: () => void
};

export const ModalQuant: React.FC<ModalQuantProps> = ({
    isVisible,
    closeModal,
    name,
    image,
    price,
    quantidade,
}) => {
    if (!isVisible) {
        return null;
    }

    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    }

    const fecharModal = () => {
        setModalVisible(false);
    }

    const lidarComPressaoNoModal = (event: any) => {
        // Impede que o evento de pressão se propague para os componentes pai
        event.stopPropagation();
    }

    return (
        <KeyboardAvoidingView>
            {/* <Pressable onPress={abrirModal}>
                <Box bg={'red'} h='100px' alignItems={'center'} justifyContent={'center'}>
                    <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize='25'>
                        CARD Quantidade
                    </Text>
                </Box>
            </Pressable> */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={fecharModal}>
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    activeOpacity={1}
                    onPress={fecharModal}>
                    <View style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }} />
                    <TouchableOpacity
                        style={{
                            flex: 1, justifyContent: "center", alignItems: "center",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        activeOpacity={1}
                        onPress={lidarComPressaoNoModal}>
                        <Box
                            w="75%"
                            h='25%'
                            bg={theme.colors.white}
                            rounded={30}
                            alignItems={"center"}>
                            <VStack px='5%' py='5%' w='100%' alignItems={"center"} >
                                <Text fontFamily={theme.fonts.semiBold} fontSize='20'>Selecione a quantidade desejada</Text>
                                <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                                <Pressable justifyContent={'center'} rounded={'10'} h='20%' alignItems={"center"} w='100%' bg={theme.colors.primary} mt='30%' onPress={() => window.alert("compra adicionada ao carrinho")}>
                                    <Text fontFamily={theme.fonts.semiBold} fontSize='15'>
                                        ADICIONAR
                                    </Text>
                                </Pressable>
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </KeyboardAvoidingView>
    )
}
