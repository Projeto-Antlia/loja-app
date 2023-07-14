import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text} from 'native-base';

const coquinha = ('../../assets/coquinha.png')
const imageCoca = ('../../assets/coca.png')

import {
    FlatList,
    KeyboardAvoidingView,
    Pressable,
} from 'react-native';

import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter';
import { CardItem } from '../../components/CardItem/CardItem';
import Header from '../../components/Header/Header';

const data = [
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Sprite Lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Coquinha', image: coquinha, valor: '1,49', quantidade: '' },
    { title: 'Fanta Uva', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '350' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
    // { title: 'Coca Cola lata', image: imageCoca, valor: '3,49', quantidade: '' },
]

const text = () => {
    window.alert('pagina de carrinho')
}

export default function MktScreen() {
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
                style={{ flex: 1 }}
            >
                <Header />
                <Box bg='#E9E9E9' alignItems='center' h='100%' >
                    <VStack w='90%'>
                        <Box display='flex' flexDirection='row' justifyContent='space-around' mt='10' >
                            <ButtonFilter
                                image=''
                                title='LANCHES'
                            />
                            <ButtonFilter
                                image=''
                                title='REFRIGERANTE'
                            />
                            <ButtonFilter
                                image=''
                                title='CERVEJAS'
                            />
                        </Box>
                        <ScrollView h='67%' bg='#708090' display="flex"  >
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
                    </VStack>
                    <Box bg='#ffbf1a'>
                        <Pressable onPress={text}>
                            <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Rubik_600SemiBold', fontSize: 25, padding: 5 }}>
                                    CONTINUAR
                                </Text>
                                <Box style={{ backgroundColor: '#fff', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/VectorBCar.png')} alt="Vector Bag" />
                                </Box>
                            </Box>
                        </Pressable>
                    </Box>
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}