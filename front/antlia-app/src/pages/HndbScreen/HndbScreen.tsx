import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text } from 'native-base';

const coquinha = ('../../assets/coquinha.png')
const imageCoca = ('../../assets/coca.png')

import {
    FlatList,
    KeyboardAvoidingView,
} from 'react-native';

import Header from '../../components/Header/Header';
import DtlMoth from '../../components/DtlMoth/DtlMoth';
import {ItnConfirmation} from '../../components/ItnConfirmation/ItnConfirmation';
import TotalMkt from '../../components/TotalMkt/TotalMkt';


export default function HndbScreen() {
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
            <KeyboardAvoidingView style={{ height: '100%', justifyContent: 'space-evenly' }} >
                <Header />
                <Box h='76%' bg='#E9E9E9'>
                    <DtlMoth />
                    <VStack h='85%' >
                        <ScrollView>
                            <ItnConfirmation title={'Coca Cola Lata'} image={''} valor={'7,00'} quantidade={'2'} descricao={'350'}/>
                            <ItnConfirmation title={''} image={''} valor={''} />
                            <ItnConfirmation title={''} image={''} valor={''} />
                            <ItnConfirmation title={''} image={''} valor={''} />
                        </ScrollView>
                    </VStack>
                </Box>
                <TotalMkt />
            </KeyboardAvoidingView>
        </NativeBaseProvider >
    )
}



{/*                 <VStack bg='#E9E9E9' alignItems='center' h={'70%'}>
                            <DtlMoth />
                            <ItnConfirmation />
                            <ItnConfirmation />
                            <ItnConfirmation />
                            <ItnConfirmation />
                        </VStack>
                         */}