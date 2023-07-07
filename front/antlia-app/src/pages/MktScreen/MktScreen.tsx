import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, Center, NativeBaseProvider, ScrollView, VStack, Image } from 'native-base';
import { Row } from 'react-native-flexbox-grid';
import { FlatGrid } from 'react-native-super-grid';
import {
    FlatList,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter';
import { CardItem } from '../../components/CardItem/CardItem';
import Header from '../../components/Header/Header';


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
                <Box py="4" height='100%' width="100%" backgroundColor="#E9E9E9" alignItems='center'>
                    <VStack justifyContent="space-between" w='90%' >
                        <Box display={'flex'} flexDirection='row' justifyContent='space-around' >
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
                            <Row style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                <CardItem title={'Coca Cola Lata'} image={'Coquinha'} valor='3,49' quantidade='350' />
                                <CardItem title={''} image={''} quantidade='350' />
                                <CardItem title={''} image={''} />
                            </Row>
                        </ScrollView>
                    </VStack>
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}
