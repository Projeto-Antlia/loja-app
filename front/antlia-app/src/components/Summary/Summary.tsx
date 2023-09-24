import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Badge, Box, HStack, Image, Text, VStack } from "native-base";
import { BarChart } from "react-native-chart-kit";
import theme from '../../theme/index';
import { Dimensions } from "react-native";
import Graph from "../Graph/Graph";
import DetailsMoth from "../DetailsMoth/DetailsMoth";

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
