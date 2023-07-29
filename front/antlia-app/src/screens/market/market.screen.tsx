import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import { StackTypes } from '../../routes/Stack';
import ButtonNext from '../../components/ButtonNext/buttonNext'
import Categories from '../../components/Category/category'
import Products from '../../components/Products/products'
import theme from '../../theme';
import Container from '../../components/Container/Container'

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

    return (
        <>
            <Box style={styles.container}>
                <Header />
                <Container >
                    <Categories onCategorySelected={setCategorySelected} categorySelected={categorySelected} />
                    <Products categorySelected={categorySelected} />
                </Container>
                <ButtonNext navigation={navigation} />
            </Box>
        </>

    )
}