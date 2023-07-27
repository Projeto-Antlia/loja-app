import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { useNavigation } from '@react-navigation/native';
import { Box, NativeBaseProvider, VStack } from 'native-base';
import { StackTypes } from '../../routes/Stack';
import ButtonNext from '../../components/ButtonNext/buttonNext'
import Categories from '../../components/Category/category'
import Products from '../../components/Products/products'
import theme from '../../theme';

import {
    KeyboardAvoidingView
} from 'react-native';

import { useState } from 'react';
import Header from '../../components/Header/Header';

type Category = {
    id: string;
    title: string;
    image: string;
}

type Product = {
    id: string;
    category_id: string;
    title: string;
    image: string;
    valor: string;
}

export default function MktScreen() {
    const [categorySelected, setCategorySelected] = useState<Category | undefined>(undefined);
    const navigation = useNavigation<StackTypes>();
    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView
                style={{ flex: 1 }}>
                <Header />
                <Box bg={theme.colors.background} alignItems='center' h='100%' flexGrow={1}>
                    <VStack w='90%'>
                        <Categories onCategorySelected={setCategorySelected} categorySelected={categorySelected} />
                        <Products categorySelected={categorySelected} />
                    </VStack>
                    <ButtonNext navigation={navigation} />
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}