import React, { useEffect, useState } from 'react';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Divider, Pressable, Button } from "native-base";
import theme from '../../theme';
import { CartItem,useCart } from '../../contexts/CartContext'; // Importe o useCart


export interface IntConfirmationProps {
    title?: string
    image?: string
    quantidade?: number;
    onValueChange: (value:number) => void;
    onValueRemove: () => void;
    valor: string | undefined
    category_id:string;
    itemId: string;
    flagCartSreen?: boolean;
}

export const ItnConfirmation: React.FC<IntConfirmationProps> = ({ title, image, valor,category_id, quantidade, onValueChange, onValueRemove, itemId, flagCartSreen }) => {
    const [quantity, setQuantity] = useState<number>(quantidade || 0);
    const isQuatityOne = quantidade === 1;
    const { cartState, cartDispatch } = useCart();


    
    const increment = () => {
        const newQuantity = quantity +1;
        setQuantity(quantity + 1)
        console.log(newQuantity);
        
        if(flagCartSreen){
            cartDispatch({ type: 'INCREMENT_ITEM', payload: itemId }); 
        }
        onValueChange(newQuantity);
        
    };

    const decrement = (item: CartItem) => {
        if (quantity > 1) {
            const newQuantity = quantity - 1
            setQuantity(quantity - 1)
            if(flagCartSreen){
                cartDispatch({ type: 'DECREMENT_ITEM', payload: itemId }); 
            }
                onValueChange(newQuantity)
                console.log('diminuindo', newQuantity);
        }
    };

    const removeItem = () => {
        cartDispatch({ type: 'REMOVE_ITEM', payload: itemId });
        setQuantity(0)
        console.log('removeItem', quantity)
        onValueRemove();
    };

    useEffect(()=>{
        console.log("typeOf",cartState);
    },[cartState, quantity])
    

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
                                    <Button onPress={() => decrement({ product_id: itemId, category_id: category_id, name: title, image: image, quantidade:quantity, price: valor })} bg={theme.colors.primary} rounded={40} w='12' justifyContent={'center'}>
                                        <Text style={{ fontFamily: 'Rubik_700Bold' }} >
                                            -
                                        </Text>
                                    </Button>
                                </>
                            )}
                            <Text color={theme.colors.black} fontSize={35} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                                {quantity}
                            </Text> 
                            <Button  onPress={increment} bg={theme.colors.primary} rounded={40} w='12'>
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