import { Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ModalAuth } from '../../components/ModalAuth/ModalAuth';
import { StackTypes } from '../../routes/Stack';
import theme from '../../theme';

export default function RestScreen() {
    const navigation = useNavigation<StackTypes>();
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    if (!fontLoaded) {
        return null;
    }
    return (
        <KeyboardAvoidingView>
            <Pressable
            // onPress={() => { navigation.navigate("Home") }}
            >
                <Box backgroundColor="#F8B91B" maxWidth="100%" h='100%' py={5}>
                    {/* <Box backgroundColor="#F8B91B" maxWidth="100%" h='73%' py={5}>   👈🏻substituir a linha de cima junto com a integração rfid   */}
                    <Text fontSize="95" color="#502275" style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign={"left"} paddingLeft={20} paddingTop={20} lineHeight={85}>
                        ANTLIA{'\n'}
                        FOOD{'\n'}
                        SERVICE
                    </Text>
                    <HStack justifyContent="space-around" alignItems={'center'} paddingTop={45} paddingRight={19} py={8}>
                        <Image style={{ height: 220, width: 345 }}
                            source={require('../../assets/hamburguer.png')}
                            alt="Vector hamburguer" />
                    </HStack>
                    <Text fontSize="95" color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign='center'>
                        PEÇA AQUI
                    </Text>

                    {/* 👇🏻 Tirar apos compatibilidade com cartão rfid  👇🏻 */}
                    <Pressable onPress={openModal} alignItems={'center'} mt='10%'>
                        <Box backgroundColor={theme.colors.secondary} w='30%' h='25%' rounded={10} alignItems={'center'} >
                            <Text p='3' color={theme.colors.white} fontSize={theme.size.font10}>ENTRAR</Text>
                            <ModalAuth
                                isVisible={modalVisible}
                                onClose={closeModal} />
                        </Box>
                    </Pressable>
                    {/* 👆🏻 Tirar apos compatibilidade com cartão rfid 👆🏻 */}

                </Box>
            </Pressable>
        </KeyboardAvoidingView>
    )
}