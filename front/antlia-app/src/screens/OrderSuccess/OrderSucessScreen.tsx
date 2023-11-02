import { Rubik_400Regular, Rubik_600SemiBold, useFonts, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { Box, HStack, NativeBaseProvider, Pressable, Text, VStack, Image, ScrollView } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { Line } from 'react-native-svg';

type OrderItem = {
    product_id: string;
    product_name: string;
    quantity: number;
    subtotal: number;
}

type Order = {
    id: string;
    customer_id: string;
    customer_name: string;
    total: number,
    order_items: OrderItem[],
    created_at: string;
	
}

export default function OrderSucessScreen() {
    const navigation = useNavigation<StackTypes>();
    const route = useRoute();

    const { order } = route.params as Order;

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    if (!fontLoaded && !order) {
        return null;
    }

    const colorTextSecondary = "#777777";

    return (
        <KeyboardAvoidingView >
            <Box py="4" maxWidth="100%" h='92%' backgroundColor='#502275' alignItems='center'>
                <VStack justifyContent="space-between" w='80%' mt={20}>
                        <Text fontSize="80" lineHeight={80} color={theme.colors.white} style={{ fontFamily: 'Rubik_600SemiBold' }} textAlign='center'>
                            COMPRA REALIZADA!
                        </Text>
                        <Text mt={20} color={theme.colors.white} fontSize={20} style={{ fontWeight: 'bold' }}>Não esqueça os seus produtos</Text>
                        <VStack maxWidth="100%" marginTop={10} alignItems='center' background='#fff' borderRadius={10}>
                            <Box py="4" width="100%" px={5} alignItems='center' flexDir='row' borderBottomColor="#ddd" borderBottomWidth={1}>
                                <Box flexGrow={1}>
                                    <Text fontSize={9} fontWeight="bold" color={colorTextSecondary}>CÓDIGO</Text>
                                    <Text fontWeight="bold" lineHeight={16}>{order.id.split('-')[0]}</Text>
                                </Box>
                                <Text fontSize={12} fontWeight="bold" color={colorTextSecondary}>DETALHES DO PEDIDO</Text>
                            </Box>
                            <Box py="4" width="100%" alignItems='center' borderBottomColor="#ddd" borderBottomWidth={1}>
                                <Box flexDir='row' width="100%" px={8} >
                                    <Text width={24} fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='bold'>COD</Text>
                                    <Text flexGrow={1} fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='bold'>PRODUTO</Text>
                                    <Text fontSize={12} lineHeight={20} px={5} color={colorTextSecondary} fontWeight='bold' width={20}>QTD</Text>
                                    <Text fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='bold' width={20}>SUBTOTAL</Text>
                                </Box>
                                { order?.order_items?.map(items => {
                                    return (
                                        <Box flexDir='row' width="100%" px={8} >
                                            <Text width={24} fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='semibold'>{items.product_id.split('-')[0]}</Text>
                                            <Text flexGrow={1} fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='semibold'>{items.product_name}</Text>
                                            <Text fontSize={12} lineHeight={20} px={5} color={colorTextSecondary} fontWeight='semibold' width={20}>{items.quantity}</Text>
                                            <Text fontSize={12} lineHeight={20} color={colorTextSecondary} fontWeight='semibold' width={20}>R$ {items.subtotal.toFixed(2)}</Text>
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Box py={3} px="5" width="100%" alignItems='flex-end'>
                                <Box textAlign="right">
                                    <Text fontSize={10} fontWeight="bold" textAlign="right" color={colorTextSecondary}>TOTAL</Text>
                                        <Text fontSize={16} fontWeight="bold" lineHeight={20}>R$ {order?.total?.toFixed(2)}</Text>
                                </Box>
                            </Box>
                        </VStack>
                </VStack>
            </Box>
           
            <ButtonFinish  navigation={navigation} />
        </KeyboardAvoidingView>
    )
}