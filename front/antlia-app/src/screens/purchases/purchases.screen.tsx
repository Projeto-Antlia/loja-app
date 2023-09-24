import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box } from 'native-base';
import Container from '../../components/Container/Container';
import HeaderMarket from '../../components/Header/HeaderMarket';
import TotalFooter from '../../components/TotalFooter/totalFooter';
import Summary from '../../components/Summary/Summary';



export default function PrcScreen() {
    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });
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
        },
        teste: {
            flexGrow: 1,
            backgroundColor: '#E9E9E9',
            "justify-content": 'center',
        },
    };

    return (
        <>
            <Box style={styles.container}>
                <HeaderMarket />
                <Box style={styles.teste}>
                    <Summary />
                </Box>
                <TotalFooter />
            </Box>
        </>

    )
}