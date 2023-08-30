import React, { useState } from 'react';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Divider, Pressable, Button } from "native-base";
import theme from '../../theme';

interface IntConfirmationProps {
    title: string
    image: string
    descricao?: string
    quantidade: number
    valor: string | undefined
}

export const ItnConfirmation: React.FC<IntConfirmationProps> = ({ title, image, valor, descricao, quantidade = 1 }) => {
    const [quantity, setQuantity] = useState<number>(quantidade);
    const isQuatityOne = quantity === 1;

    descricao === '' ? descricao = 'Garrafinha' : descricao = descricao + ' ML'

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    const removeItem = () => {
        window.alert('teste de remoção')
    };

    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView >
                <HStack bg={theme.colors.white} p='2%' w='100%' h='150px' alignItems={'center'} justifyContent={'space-between'}>
                    <Image
                        style={{ height: 120, width: 120 }}
                        src={image || ""}
                        alt="Vector Bag"
                    />
                    <Divider thickness="2" orientation="vertical" />
                    <Box >
                        <Text color='#626262' style={{ fontFamily: 'Rubik_400Regular' }}>
                            {title}{'\n'}
                            {/* {descricao} */}
                        </Text>
                        <Text color={theme.colors.textPrimary} fontSize={20} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                            {`R$: ${valor}`}
                        </Text>
                    </Box>
                    <Box w='30%' >
                        <HStack alignItems={'center'} w='80%' justifyContent={'space-around'} >
                            {isQuatityOne ? (
                                <Pressable onPress={removeItem}>
                                    <Image source={require('../../assets/trash.png')} alt="Lixeira" />
                                </Pressable>
                            ) : (
                                <>
                                    <Button onPress={decrement} bg={theme.colors.primary} rounded={40} w='12' justifyContent={'center'}>
                                        <Text style={{ fontFamily: 'Rubik_700Bold' }} >
                                            -
                                        </Text>
                                    </Button>
                                </>
                            )}
                            <Text color={theme.colors.black} fontSize={35} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                                {quantity}
                            </Text>
                            <Button onPress={increment} bg={theme.colors.primary} rounded={40} w='12'>
                                <Text style={{ fontFamily: 'Rubik_700Bold' }}>
                                    +
                                </Text>
                            </Button>
                        </HStack>
                    </Box>
                </HStack>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}