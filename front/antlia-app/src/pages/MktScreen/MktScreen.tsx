import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import axios, { isCancel, AxiosError } from 'axios';

const coquinha = 'https://cbissn.ibict.br/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1'
const imageCoca = 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000'

import {
    FlatList,
    KeyboardAvoidingView,
    Pressable,
} from 'react-native';

import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter';
import { CardItem } from '../../components/CardItem/CardItem';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';

const data = [
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Sprite Lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Coquinha', image: coquinha, valor: '1,49', quantidade: '' },
    { title: 'Fanta Uva', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
]

const categoriesList = [
    {
        title: 'LANCHES',
        imagem: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000'
    },
    {
        title: 'REFRIGERANTE',
        imagem: ''
    },
    {
        title: 'CERVEJAS',
        imagem: ''
    }
]
export default function MktScreen() {

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
                <Box bg='#E9E9E9' alignItems='center' h='100%' >
                    <VStack w='90%'>
                        <Categories />
                        <Products />
                    </VStack>
                    <ButtonNext navigation={navigation} />
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}

    type Category = {
        id: string;
        title: string;
        imagem: string;
    }

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        axios.get('http://192.168.2.219:3000/categories').then(
            (response) => {
                console.log(response.data)
                setCategories(response.data)
            }
        )
    }, [])
    return (
        <Box display='flex' flexDirection='row' justifyContent='space-around' mt='10' >
            {
                categories.map((item, index) => (
                    <ButtonFilter
                        key={index}
                        title={item.title}
                        image={item.imagem}
                    />
                ))
            }
        </Box>
    )
}

const Products = () => (
    <ScrollView ml='4.5%' h='67%'>
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            renderItem={({ item }) => (
                <CardItem
                    title={item.title}
                    image={item.image}
                    valor={item.valor}
                    quantidade={item.quantidade}
                />
            )}
        />
    </ScrollView>
)

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