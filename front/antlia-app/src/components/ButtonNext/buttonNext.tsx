import { Box } from "native-base";
import { Pressable } from "react-native";
import { fonts} from ''


const ButtonNext = ({ navigation }: any) => (
    <Box bg='#ffbf1a' >
        <Pressable onPress={() => navigation.navigate("HndbScreen")}>
            <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'Rubik_600SemiBold', fontSize: 25, padding: 5 }}>
                    CONTINUAR
                </Text>
                <Box style={{ backgroundColor: '#fff', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/VectorBCar.png')} alt="Vector Bag" />
                </Box>
            </Box>
        </Pressable>
    </Box>
)