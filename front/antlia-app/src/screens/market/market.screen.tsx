import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import { useState } from 'react';
import ButtonNext from '../../components/ButtonNext/buttonNext';
import Categories from '../../components/Category/category';
import Container from '../../components/Container/Container';
import HeaderMarket from '../../components/Header/HeaderMarket';
import Products from '../../components/Products/products';
import { StackTypes } from '../../routes/Stack';

type Category = {
    id: string;
    name: string;
    image: string;
}

type Product = {
    id: string;
    category_id: string;
    name: string;
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
                <HeaderMarket />
                <Container >
                    <Categories onCategorySelected={setCategorySelected} categorySelected={categorySelected} />
                    <Products categorySelected={categorySelected} />
                </Container>
                <ButtonNext navigation={navigation} />
            </Box>
        </>

    )
}