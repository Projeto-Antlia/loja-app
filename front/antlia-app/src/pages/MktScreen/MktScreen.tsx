import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import axios, { isCancel, AxiosError } from 'axios';
import {URL_API} from "../../env"

import {
    FlatList,
    KeyboardAvoidingView,
    Pressable,
} from 'react-native';

import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter';
import { CardItem } from '../../components/CardItem/CardItem';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';

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

    const Categories = () => {
        const [categories, setCategories] = useState<Category[]>([]);

        useEffect(() => {

            axios.get(`${URL_API}/categories`).then(res => {
                setCategories(res.data);
            })

        }, [])

        const handleIsActive = (cat: Category) => {
            setCategorySelected(cat)
        }

        return (

            <Box display='flex' flexDirection='row' justifyContent='space-around' mt='10' >
                {
                    categories.map((item, index) => (
                        <ButtonFilter
                            key={index}
                            emit={handleIsActive}
                            isActive={categorySelected?.id === item.id}
                            category={item}
                        />
                    ))
                }
            </Box>
        )
    }

    const Products = ({ categorySelected }: { categorySelected?: Category }) => {
        const [products, setProducts] = useState<Product[]>([]);

        useEffect(() => {

            axios.get(`${URL_API}/products`).then(res => {
                let products: Product[] = res.data;

                if (categorySelected) {
                    products = products.filter(prod => prod.category_id === categorySelected.id)
                }

                setProducts(products);
            })

        }, [])
    
        return (
            <ScrollView ml='4.5%' h='67%'>
                {
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <CardItem
                                title={item.title}
                                image={item.image}
                                valor={item.valor}
                            />
                        )}
                    />
                }
            </ScrollView>
        )
    }

    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView
                style={{ flex: 1 }}>
                <Header />
                <Box bg='#E9E9E9' alignItems='center' h='100%' flexGrow={1}>
                    <VStack w='90%'>
                        <Categories />
                        <Products categorySelected={categorySelected} />
                    </VStack>
                    <ButtonNext navigation={navigation} />
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}

const ButtonNext = ({ navigation }: any) => (
    <Box bg='#ffbf1a' >
        <Pressable onPress={() => navigation.navigate("HndbScreen")}>
            <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'Rubik_600SemiBold', fontSize: 25, padding: 5 }}>
                    CONTINUAR
                </Text>
                <Box style={{ backgroundColor: '#fff', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/VectorBCar.png')} alt="Vector Bag" />
                </Box>
            </Box>
        </Pressable>
    </Box>
)