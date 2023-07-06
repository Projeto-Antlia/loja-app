import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack } from 'native-base';

import { Row } from 'react-native-flexbox-grid';


import {
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
                <Box py="4"height='100%' width="100%" backgroundColor="#E9E9E9" alignItems='center'>
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
                            <Row display='flex' justifyContent='space-around'>
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                                <CardItem title={''} image={''} />
                            </Row>
                        </ScrollView>
                    </VStack>
                </Box>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}

{/* <SimpleLineIcons
        color={'#ffff'}
        name="handbag"
        size={90}
    /> */}