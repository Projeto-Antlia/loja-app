import { Rubik_400Regular, Rubik_600SemiBold, useFonts, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { Box, HStack, NativeBaseProvider, Pressable, Text, VStack, Image, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    KeyboardAvoidingView,
    StatusBar,

} from 'react-native';
import Header from '../../components/Header/Header';
import { StackTypes } from '../../routes/Stack';
import HeaderHome from '../../components/Header/HeaderHome';
import theme from '../../theme';
import { TotalMkt } from '../../components/TotalMkt/TotalMkt';
import HeaderBag from '../../components/Header/HeaderBag';
import ButtonFinish from '../../components/Buttons/ButtonFinish/buttonFinish';




export default function OrderSucessScreen() {
    const navigation = useNavigation<StackTypes>();

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <KeyboardAvoidingView >
            <Box py="4" maxWidth="100%" h='92%' backgroundColor='#502275' alignItems='center'>
            <VStack justifyContent="space-between" w='80%'>
                    <Text fontSize="80" color={theme.colors.white} style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign='center'>
                        COMPRA REALIZADA!
                    </Text>
                    <Pressable  display='flex' justifyContent="center" rounded="8"  marginBottom={10}
                        onPress={() => { navigation.navigate('Rest'); }}>
                        <Text color={theme.colors.white} fontSize={20} style={{ fontWeight: 'bold' }}>Não esqueça os seus produtos</Text>
                    </Pressable>
                    </VStack>
            </Box>
           
            <ButtonFinish  navigation={navigation} />
        </KeyboardAvoidingView>
    )
}