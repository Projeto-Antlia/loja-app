import React from 'react';
import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Divider, useToast, Pressable, VStack } from "native-base";

interface IntConfirmationProps {
    title: string
    image: string
    descricao?: string
    quantidade?: string
    valor: string
}

export const ItnConfirmation: React.FC<IntConfirmationProps> = ({ title, image, valor, descricao, quantidade }) => {

    const toast = useToast();
    const styles = {
        h3: title,
        image: image,
        descricao: descricao,
        quantidade: quantidade,
        valor: valor
    }
    descricao === '' ? descricao = 'Garrafinha' : descricao = descricao + ' ML'

    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView >
                <HStack bg='#fff' w='100%' h='150px' alignItems={'center'} justifyContent={'space-between'}>
                    <Image
                        style={{ height: 120, width: 120 }}
                        // src={image}
                        source={require('../../assets/coca.png')}
                        alt="Vector Bag"
                    />
                    <Divider thickness="2" orientation="vertical" />
                    <Box >
                        <Text color='#626262' style={{ fontFamily: 'Rubik_400Regular' }}>
                            {title}{'\n'}{descricao}
                            {/* Coca Cola Lata{'\n'} 350ML */}
                        </Text>
                        <Text color='#2B2B2B' fontSize={20} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                            {`R$: ${valor}`}
                        </Text>
                    </Box>
                    <Box>
                        <HStack alignItems={'center'} w={'1/2'} justifyContent={'space-evenly'}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={require('../../assets/less.png')}
                                alt="Vector Bag"
                            />
                            <Text color='#000' fontSize={35} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                                {quantidade}
                            </Text>
                            <Pressable onPress={() => window.alert("I'm Presseds")}>
                                <Image
                                    style={{ height: 45, width: 45 }}
                                    source={require('../../assets/plus.png')}
                                    alt="Vector Bag"
                                />
                            </Pressable>
                        </HStack>
                    </Box>
                </HStack>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}

