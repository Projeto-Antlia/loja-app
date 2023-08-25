import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, ScrollView, VStack, Image, Text, Button } from 'native-base';

const coquinha = 'https://cbissn.ibict.br/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1'
const imageCoca = ('../../assets/coca.png')

import {
    FlatList,
    KeyboardAvoidingView,
} from 'react-native';

import DtlMoth from '../../components/DtlMoth/DtlMoth';
import { ItnConfirmation } from '../../components/ItnConfirmation/ItnConfirmation';
import TotalMkt from '../../components/TotalMkt/TotalMkt';
import ModalQuant from '../../components/ModalQuant/ModalQuant';
import HeaderBag from '../../components/Header/HeaderBag';


export default function HndbScreen() {
    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });
    if (!fontLoaded) {
        return null;
    }

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
        <KeyboardAvoidingView style={styles.container} >
            <HeaderBag />
            <Box h='76%' bg='#E9E9E9'>
                <DtlMoth />
                <VStack h='85%' >
                    <ScrollView>
                        <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                        <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                        <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                        <ItnConfirmation title={'Coca Cola Lata'} image={coquinha} valor={'7,00'} quantidade={1} descricao={'350'} />
                    </ScrollView>
                    <ModalQuant />
                </VStack>
            </Box>
            <TotalMkt />
        </KeyboardAvoidingView>
    )
}