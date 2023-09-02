import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from '@react-navigation/native-stack';

import Home from "../screens/home/home.screen";
import MarketScreen from '../screens/market/market.screen';
import CartScreen from '../screens/cart/cart.screen';
import SplashScreen from '../screens/splash/SplashScreen';
import RestScreen from '../screens/rest/RestScreen';
import { CartItem, CartProvider, useCart } from '../contexts/CartContext';
// import RestScreen from '../screens/Rest/RestScreen';

const Stack = createNativeStackNavigator();

//para tratamento e passagem de dados
type StackNavigation = {
    Home: undefined;
    MarketScreen: undefined;
    CartScreen: undefined
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
    return (
        <CartProvider>
        <NavigationContainer>
            <Stack.Navigator>
                
                {/* Adicione outras telas aqui, se necessário */}
                <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="MarketScreen" component={MarketScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
        </CartProvider>
    );
}