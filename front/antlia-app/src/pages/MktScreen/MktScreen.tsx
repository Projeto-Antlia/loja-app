import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text } from 'native-base';
import { Row } from 'react-native-flexbox-grid';
import { FlatGrid } from 'react-native-super-grid';

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
]

const text=() =>{
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
                {/* Header que ainda vai ser feito */}
                <Header />
                <Box py="4" height='85%' width="100%" backgroundColor="#E9E9E9" alignItems='center'>
                    <VStack justifyContent="space-between" w='90%' >
                        <Box display='flex' flexDirection='row' justifyContent='space-around' >
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
                        <ScrollView >
                            <Row style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <FlatList
                                    data={data}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <CardItem
                                            title={item.title}
                                            image={item.image}
                                            valor={item.valor}
                                            quantidade={item.quantidade}
                                        />
                                    )}
                                />
                            </Row>
                        </ScrollView>
                    </VStack>
                </Box>
                <Box bg='#ffbf1a' w='100%'  >
                    <Pressable display='flex' flexDirection='row' w='100%' justifyContent={'flex-end'} alignItems={'center'} onPress={text}  >
                        <Text style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize='25' p='5'>
                            CONTINUAR
                        </Text>
                        <Box bg="#fff" h='100' w='100' alignItems={'center'} display={'flex'} justifyContent={'center'}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../assets/VectorBCar.png')}
                                alt="Vector Bag"
                            />
                        </Box>
                    </Pressable>
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}
