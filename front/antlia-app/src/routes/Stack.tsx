import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from '@react-navigation/native-stack';

import Home from "../pages/Home/Home";
import MktScreen from '../pages/MktScreen/MktScreen';
import HndbScreen from '../pages/HndbScreen/HndbScreen';

const Stack = createNativeStackNavigator();

//para tratamento e passagem de dados
type StackNavigation = {
    Home: undefined;
    MktScreen: undefined;
    HndbScreen: undefined
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Adicione outras telas aqui, se necessário */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="MktScreen" component={MktScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HndbScreen" component={HndbScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}