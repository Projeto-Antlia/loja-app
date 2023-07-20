import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, NativeBaseProvider, ScrollView, VStack, Image, Text, HStack, Spinner } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const coquinha = ('../../assets/coquinha.png')
const imageCoca = ('../../assets/coca.png')

import {
    FlatList,
    KeyboardAvoidingView,
    Pressable,
    StyleSheet
} from 'react-native';

const text = () => {
    window.alert('pagina de carrinho')
}

export default function SplashScreen() {
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
            <Box style={styles.container}>
                <LinearGradient
                    style={styles.background}
                    start={{ x: 0, y: 0.4 }}
                    end={{ x: 1, y: 1.5 }}
                    colors={['#502275', '#F8B91B']}
                // colors={['red', 'blue']}

                />
                <VStack style={styles.logoContainer} justifyContent={'center'}>
                    <Image source={require('../../assets/logoAntlia.png')} />
                    <Spinner color="indigo.500" size="lg" />
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        resizeMode:'cover',
        blurRadius: 1,
        // backgroundColor: 'rgba(255, 255, 255, 0.7)', // A cor com transparência cria o efeito de vidro
        backgroundColor: '#708090'
    },
    logoContainer: {
        // backgroundColor: blur('10px');
        // backdropFilter: blur(10px)
        // alignItems: 'center',
        // marginTop: '25%',
    },
    logo: {
        width: 200,
        height: 200,
    },
});