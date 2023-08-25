import { Rubik_400Regular, Rubik_600SemiBold, useFonts, Rubik_700Bold, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { Box, HStack, NativeBaseProvider, Pressable, Text, VStack, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import { StackTypes } from '../../routes/Stack';

export default function RestScreen() {
    const navigation = useNavigation<StackTypes>();

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
        <NativeBaseProvider>
            <KeyboardAvoidingView>
                <Pressable onPress={() => { navigation.navigate("Home") }}>
                    <Box backgroundColor="#F8B91B" maxWidth="100%" h='73%' py={5}>
                        <Text fontSize="95" color="#502275" style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign={"left"} paddingLeft={20} paddingTop={20} lineHeight={85}>
                            ANTLIA{'\n'}
                            FOOD{'\n'}
                            SERVICE
                        </Text>
                        <HStack justifyContent="space-around" alignItems={'center'} paddingTop={45} paddingRight={19} py={8}>
                            <Image style={{ height: 220, width: 345 }}
                                source={require('../../assets/hamburguer.png')}
                                alt="Vector hamburguer"
                            />
                        </HStack>
                        <Text fontSize="95" color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign='center'>
                            PEÇA AQUI
                        </Text>
                    </Box>
                    <Box backgroundColor="#FFFFFF" h='27%' maxWidth="100%" display='flex' justifyContent="center" >
                        <HStack justifyContent="space-around" alignItems={'center'} paddingTop={10} py={5}>
                            <Image style={{ height: 155, width: 170 }}
                                source={require('../../assets/handsCard.png')}
                                alt="Vector nfc"
                            />
                        </HStack>
                        <Text fontSize="32" color="#000" textAlign={'center'} style={{ fontFamily: 'Rubik_500Medium' }}>
                            APROXIME O SEU CARTÃO NO{'\n'}
                            LEITOR PARA CONTINUAR
                        </Text>
                    </Box>
                </Pressable>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}