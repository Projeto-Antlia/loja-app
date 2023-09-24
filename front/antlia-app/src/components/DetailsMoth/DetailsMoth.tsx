import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Badge, Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import { BarChart } from "react-native-chart-kit";
import theme from '../../theme/index';
import { Dimensions } from "react-native";
import Graph from "../Graph/Graph";


const DetailsMoth = () => {

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    return (
        <>
            {/* <Pressable onPress={window.alert("detalhamentos do mês")}>  */}
            <Pressable onPress={() => window.alert("detalhamentos do mês")} >
                <HStack bg={theme.colors.white} p={5} justifyContent={'space-between'} px={10} alignItems={'center'}>
                    <Box>
                        <Text style={{ fontFamily: theme.fonts.semiBold }}>JUN</Text>
                        <Text style={{ fontFamily: theme.fonts.regular }}>Fecha dia</Text>
                    </Box>
                    <HStack>
                        <Text style={{ fontFamily: theme.fonts.semiBold }}>R$ 70,00</Text>
                    </HStack>
                </HStack>
            </Pressable>
        </>
    )
}

export default DetailsMoth;
