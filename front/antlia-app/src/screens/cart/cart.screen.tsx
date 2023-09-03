import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import React, { useEffect, useState } from 'react';
import { Box, ScrollView, VStack, Text } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import DtlMoth from '../../components/DtlMoth/DtlMoth';
import HeaderBag from '../../components/Header/HeaderBag';
import { ItnConfirmation, IntConfirmationProps } from '../../components/ItnConfirmation/ItnConfirmation';
import {TotalMkt} from '../../components/TotalMkt/TotalMkt';
import { CartItem, useCart } from '../../contexts/CartContext';


export default function HndbScreen() {
    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });
    const [quantity, setQuantity] = useState<number>(1);
    const [subtotal, setSubtotal]= useState(0);
    const { cartState } = useCart();

    const handleChildQuantity = (value: number) => {
        console.log('Valor HandleQuantity', value);
        setQuantity(value);
    }

    const handleRemoveItem = (itemId: string) => {
        // Implemente a lógica para remover o item do carrinho com base no itemId
        // Você pode usar cartDispatch para despachar a ação 'REMOVE_ITEM'
      };

    const calculateSubtotal = ():string=>{
        let total = 0

        for (const itemId in cartState.items){
            const item = cartState.items[itemId];
            if(item && item.quantidade){
                const itemSubtotal = item.quantidade * (item.price ? parseFloat(item.price):0);
                total+=itemSubtotal;
            }
            
        }
        return total.toFixed(2)
    }

    
    useEffect(()=>{
        const newSubtotal = calculateSubtotal();
    setSubtotal(parseFloat(newSubtotal));
    },[cartState, cartState.items]);

    if (!fontLoaded) {
        return null;
    }

    const styles = {
        container: {
            flex: 1,
            "align-items": 'center',
            "justify-content": 'center',
        },
        header: {
            grow: 1,
            backgroundColor: 'blue',
            height: 100,
            "justify-content": 'center',
        },

        footer: {
            grow: 1,
            height: 100,
            "justify-content": 'center',
        }
    };

    // const cardItem

    
    return (
        <KeyboardAvoidingView style={styles.container} >
            <HeaderBag />
            <Box h='76%' bg='#E9E9E9'>
                <DtlMoth />
                <VStack h='85%' >
                <ScrollView>
                {Object.values(cartState.items).map((item) => (
                    
                    <ItnConfirmation
                        key={item.product_id}
                        title={item.name}
                        image={item.image}
                        valor={item.price}
                        category_id={item.category_id}
                        quantidade={item.quantidade}
                        onValueChange={handleChildQuantity}
                        onValueRemove={() => handleRemoveItem(item.product_id)}
                        itemId={item.product_id}
                        flagCartSreen={true}
        />
       
    ))}
                </ScrollView>

                </VStack>
            </Box>
            <TotalMkt subtotal={subtotal} />
        </KeyboardAvoidingView>
    )
}