import { Rubik_400Regular, Rubik_600SemiBold, useFonts, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { Box, HStack, NativeBaseProvider, Pressable, Text, VStack, Image, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    KeyboardAvoidingView,
    StatusBar,

} from 'react-native';
import Header from '../../components/Header/Header';
import { StackTypes } from '../../routes/Stack';
import HeaderHome from '../../components/Header/HeaderHome';
import {  useAuth } from '../../contexts/auth.context';

export default function Home() {
    const { user } = useAuth();

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
        <View height="100%" background="#fff">
          <HeaderHome />
            <Box py="4" maxWidth="100%" backgroundColor="#fff" alignItems='center' borderTopWidth={1} borderTopColor="#ddd">
                <VStack justifyContent="space-between" w='80%'>
                    <Text fontSize="80" color="#2b2b2b" style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign='center'>
                        {`BEM VINDO ${user?.name.toUpperCase().split(' ')[0]}`}
                    </Text>
                    <Text fontSize="50" color="#2b2b2b" style={{ fontFamily: 'Rubik_400Regular' }} py='10' >
                        O que gostaria {'\n'}de fazer?
                    </Text>
                    <Pressable h='190' display='flex' justifyContent="center" rounded="8" bg="#FFBF1A" marginBottom={10}
                        onPress={() => { navigation.navigate("MarketScreen") }}
                    >
                        <HStack justifyContent="space-around" alignItems={'center'}>
                            <Box>
                                <Text color="#000" style={{ fontFamily: 'Rubik_700Bold' }} fontSize="35">
                                    COMPRAR
                                </Text>
                            </Box>
                            <Image style={{ height: 120, width: 120 }}
                                source={require('../../assets/Vectorcar.png')}
                                alt="Vector Bag"
                            />
                        </HStack>
                    </Pressable>
                    <Pressable h='190' onPress={() => { navigation.navigate("PrcScreen") }} display='flex' justifyContent="center" rounded="8" bg="#502275" >
                        <HStack justifyContent="space-around" alignItems={'center'}>
                            <Box>
                                <Text color="#FFF" style={{ fontFamily: 'Rubik_700Bold' }} fontSize="35" lineHeight='sm'>
                                    CONSULTAR{'\n'}COMPRAS
                                </Text>
                            </Box>
                            <Image style={{ height: 120, width: 100 }}
                                source={require('../../assets/Vectorbag.png')}
                                alt="Vector Bag"
                            />
                        </HStack>
                    </Pressable>
                </VStack>
            </Box> 
        </View>
    )
}