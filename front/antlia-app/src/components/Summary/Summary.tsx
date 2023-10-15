import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Text, VStack } from "native-base";
import theme from '../../theme/index';
import DetailsMoth from "../DetailsMoth/DetailsMoth";
import Graph from "../Graph/Graph";

interface SummaryProps {

}
const Summary: React.FC<SummaryProps> = () => {

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });
    return (
        <>
            <VStack bg={theme.colors.white} p={5}>
                <Text style={{ fontFamily: theme.fonts.semiBold }}>Resumo de despesas</Text>
                <Graph />
            </VStack>
            <VStack p={7}>
                <Text style={{ fontFamily: theme.fonts.bold, fontSize: theme.size.font8 }}>Histórico de despesas</Text>
                <Text style={{ fontFamily: theme.fonts.regular, color: theme.colors.textPrimary }}>2023</Text>
            </VStack>
            <VStack>
                <DetailsMoth />
            </VStack>
        </>
    )
}

export default Summary;
