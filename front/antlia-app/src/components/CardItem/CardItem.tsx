import { HStack, NativeBaseProvider, Pressable, Text, Image, useToast, Box, VStack } from 'native-base';
import React, { useState } from 'react';
import { ModalQuant } from '../ModalQuant/ModalQuant';
import { Modal, TouchableOpacity, View } from 'react-native';
import theme from '../../theme';
import { ItnConfirmation } from '../ItnConfirmation/ItnConfirmation';

interface CardItemProps {
    name: string;
    image: string;
    quantidade?: string;
    price?: string;
}

export const CardItem: React.FC<CardItemProps> = ({ name, image, price, quantidade, }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true); 
        setIsPressed(true)
    };

    const fecharModal = () => {
        setModalVisible(false);
    };


    // const buttonStyles = {
    //     h3: name,
    //     image: image,
    //     price: price,
    //     quantidade: quantidade
    // };
    const [isPressed, setIsPressed] = useState(false);

    const lidarComPressaoNoModal = (event: any) => {
        event.stopPropagation();
    }

    const valorText = isPressed ? 'Adicionado' : `R$: ${price}`;

    return (
        <NativeBaseProvider>
            <Pressable h='250' w='200' onPress={abrirModal} rounded="8" bg="#ffff" marginBottom={10} shadow="9" display='flex' flexDirection='column' justifyContent="space-around">
                <HStack alignItems={'center'} flexDirection='column' >
                    {console.log('imagem ----->', image)}
                    <Image
                        style={{ height: 120, width: 120 }}
                        source={{
                            uri: image,
                            method: 'GET',
                            headers: {
                                Pragma: 'no-cache',
                            },
                        }}
                        alt="Alternate Text"
                    />
                    <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15" textAlign={'center'}>
                        {name}{'\n'}{quantidade}
                    </Text>
                    <Text bg={isPressed ? '#FFF' : "#ffbf1A"} color={isPressed ? '#22831A' : "#000"} borderWidth="0" w='4/6' rounded="lg" textAlign={'center'} style={{ fontFamily: 'Rubik_700Bold' }}>
                        {valorText}
                    </Text>
                </HStack>
            </Pressable>
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
                                <ItnConfirmation title={name} image={image} valor={`${price}`} quantidade={1} />
                                <Pressable justifyContent={'center'} rounded={'10'} h='20%' alignItems={"center"} w='100%' bg={theme.colors.primary} mt='30%' onPress={fecharModal}>
                                    <Text fontFamily={theme.fonts.semiBold} fontSize='15'>
                                        ADICIONAR
                                    </Text>
                                </Pressable>
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </NativeBaseProvider>
    )
}