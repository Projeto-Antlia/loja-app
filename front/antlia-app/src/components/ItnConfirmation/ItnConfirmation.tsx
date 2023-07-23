import React, { useState } from 'react';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Divider, useToast, Pressable, Button } from "native-base";

interface IntConfirmationProps {
    title: string
    image: string
    descricao?: string
    quantidade: number
    valor: string
}

export const ItnConfirmation: React.FC<IntConfirmationProps> = ({ title, image, valor, descricao, quantidade= 1 }) => {
    const toast = useToast();
    const [quantity, setQuantity] = useState<number>( quantidade );
    // const [quantity, setQuantity] = useState<number>(1)

    const handleIncrement = () => {
        setQuantity(quantidade++)
        console.log(quantidade)
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

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
                <HStack bg='#fff' p='2%' w='100%' h='150px' alignItems={'center'} justifyContent={'space-between'}>
                    <Image
                        style={{ height: 120, width: 120 }}
                        src={image || ""}
                        alt="Vector Bag"
                    />
                    <Divider thickness="2" orientation="vertical" />
                    <Box >
                        <Text color='#626262' style={{ fontFamily: 'Rubik_400Regular' }}>
                            {title}{'\n'}{descricao}
                        </Text>
                        <Text color='#2B2B2B' fontSize={20} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                            {`R$: ${valor}`}
                        </Text>
                    </Box>
                    {/* Quantidade */}
                    <Box w='30%' >
                        <HStack alignItems={'center'} w='80%' justifyContent={'space-around'} >
                            <Button onPress={handleDecrement}>
                                <Text>
                                    R
                                </Text>
                            </Button>
                            {/* <Pressable onPress={handleDecrement}>
                                <Image
                                    style={{ height: 45, width: 45 }}
                                    source={require('../../assets/less.png')}
                                    alt="Vector Bag"
                                />
                            </Pressable> */}
                            <Text color='#000' fontSize={35} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                                {quantidade}
                            </Text>
                            <Button onPress={handleIncrement}>
                                <Text>
                                    A
                                </Text>
                            </Button>
                            {/* <Pressable onPress={handleIncrement}>
                                <Image
                                    style={{ height: 45, width: 45 }}
                                    source={require('../../assets/plus.png')}
                                    alt="Vector Bag"
                                />
                            </Pressable> */}
                        </HStack>
                    </Box>
                </HStack>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}