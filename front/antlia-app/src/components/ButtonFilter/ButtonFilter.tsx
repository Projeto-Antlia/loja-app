import { Rubik_400Regular, Rubik_600SemiBold, useFonts, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { Box, HStack, NativeBaseProvider, Pressable, Text, VStack, Image } from 'native-base';
import React from 'react';

import {
    KeyboardAvoidingView,
    StatusBar,
    View,

} from 'react-native';

interface ButtonFilterProps {
    title: string;
    image: string;
    link?: string;
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({ title, image, link }) => {
    const buttonStyles = {
        h3: title,
        image: image
    };

    return (
        <Pressable h='130' w='180' onPress={() => window.alert(`i'm press ${title}`)} display='flex' justifyContent="center" flexDirection='row' rounded="8" bg="#ffff" marginBottom={10} shadow="9"  >
            <HStack justifyContent="space-around" alignItems={'center'}>
                {/* <Image style={{ height: 120, width: 120 }}
                    source={require('../../assets/Vectorcar.png')}
                    alt="Vector Bag"
                /> */}
                <Image src={image} alt="icone" />
                {/* <img src={image} alt="icone" /> */}
                <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15">
                    {title}
                </Text>
            </HStack>
        </Pressable>
    )
}