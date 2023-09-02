import React, { useEffect, useState } from 'react';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Divider, Pressable, Button } from "native-base";
import theme from '../../theme';
import { useCart } from '../../contexts/CartContext'; // Importe o useCart


export interface IntConfirmationProps {
    title?: string
    image?: string
    descricao?: string;
    quantidade?: number;
    onValueChange: (value:number) => void;
    onValueRemove: () => void;
    valor: string | undefined
    itemId: string; // Adicione uma prop para o ID do item
}

export const ItnConfirmation: React.FC<IntConfirmationProps> = ({ title, image, valor, descricao, quantidade, onValueChange, onValueRemove, itemId }) => {
    const [quantity, setQuantity] = useState<number>(quantidade || 0);
    const isQuatityOne = quantity === 1;
    const { cartDispatch } = useCart();

    descricao === '' ? descricao = 'Garrafinha' : descricao = descricao + ' ML'

    
    const increment = () => {
        const newQuantity = quantity +1
        setQuantity(quantity + 1)
        onValueChange(newQuantity);
        console.log('aumentando',newQuantity);
    };

    const decrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1
            setQuantity(quantity - 1)
            onValueChange(newQuantity)
            console.log('diminuindo', newQuantity);
        }
    };

    const removeItem = () => {
        cartDispatch({ type: 'REMOVE_ITEM', payload: itemId });
        onValueRemove();
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