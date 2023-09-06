import { Box, Text, Image, Badge, VStack, Button } from "native-base";
import { Pressable } from "react-native";
import theme from '../../../theme/index'
import { color } from "native-base/lib/typescript/theme/styled-system";
import { useCart } from '../../../contexts/CartContext';
import { red } from "react-native-reanimated";
import { StackTypes } from "../../../routes/Stack";

interface ButtonNextProps{
  navigation:StackTypes;
}


const ButtonFinish: React.FC<ButtonNextProps> = ({navigation }) => {
    const { cartState } = useCart();
    const totalItems = Object.values(cartState.items).reduce(
        (total, item) => total + (item.quantidade || 0),0);

  

return(
    <Box bg={theme.colors.primary}  >
        <Pressable onPress={() => navigation.navigate('Home')}>
        <VStack>
        <Box bg={theme.colors.white} h='100px' alignItems={'center'} justifyContent={'center'}>
                    <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25">
                        FINALIZAR
                    </Text>
                </Box>
      </VStack>
      </Pressable>
    </Box>

    
)
}

export default ButtonFinish;
