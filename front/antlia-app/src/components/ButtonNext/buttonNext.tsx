import { Box, Text, Image } from "native-base";
import { Pressable } from "react-native";
import theme from '../../theme/index'


const ButtonNext = ({ navigation }: any) => (
    <Box bg={theme.colors.primary}  >
        <Pressable onPress={() => navigation.navigate("HndbScreen")}>
            <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 25, padding: 5 }}>
                    CONTINUAR
                </Text>
                <Box style={{ backgroundColor: theme.colors.white, height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/VectorBCar.png')} alt="Vector Bag" />
                </Box>
            </Box>
        </Pressable>
    </Box>
)

export default ButtonNext;