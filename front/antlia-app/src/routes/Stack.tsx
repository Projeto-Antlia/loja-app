import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from '@react-navigation/native-stack';

import { navigationRef } from "../service/errors/navigation.service";

import Home from "../screens/home/home.screen";
import MarketScreen from '../screens/market/market.screen';
import CartScreen from '../screens/cart/cart.screen';
import SplashScreen from '../screens/splash/SplashScreen';
import RestScreen from '../screens/rest/RestScreen';
import { CartItem, CartProvider, useCart } from '../contexts/CartContext';
import OrderSucessScreen from '../screens/OrderSuccess/OrderSucessScreen';
import PrcScreen from '../screens/purchases/purchases.screen';
import { useAuth } from '../contexts/auth.context';

import { Box, NativeBaseProvider, Text } from 'native-base';

const Stack = createNativeStackNavigator();

//para tratamento e passagem de dados
type StackNavigation = {
    Rest: undefined;
    Home: undefined;
    MarketScreen: undefined;
    CartScreen: undefined;
    OrderSucessScreen: undefined;
    PrcScreen: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
    const { isLoggedIn, isError } = useAuth();

    // CRIAR TELA DE ERRO
    if (isError) {
        return (
            <NativeBaseProvider>
                <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text textAlign='center'>
                        erro
                    </Text>
                </Box>
            </NativeBaseProvider>
        );
    };

    return (
        <CartProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    {/* Adicione outras telas aqui, se necessário */}
                    {
                        !isLoggedIn ? (
                            <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />        
                        ) :
                        (
                            <>
                                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                                <Stack.Screen name="MarketScreen" component={MarketScreen} options={{ headerShown: false }} />
                                <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
                                <Stack.Screen name="OrderSucessScreen" component={OrderSucessScreen} options={{ headerShown: false }} />
                                <Stack.Screen name="PrcScreen" component={PrcScreen} options={{ headerShown: false }} />
                            </>
                        )
                    }
                    
                    
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}