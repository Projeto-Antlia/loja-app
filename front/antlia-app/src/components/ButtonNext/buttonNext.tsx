import { Box, Text, Image, Badge, VStack, Button } from "native-base";
import { Pressable } from "react-native";
import theme from '../../theme/index'
import { color } from "native-base/lib/typescript/theme/styled-system";
import { useCart } from '../../contexts/CartContext';


const ButtonNext = ({ navigation }: any) => {
    const { cartState } = useCart();
    const totalItems = Object.values(cartState.items).reduce(
        (total, item) => total + (item.quantidade || 0),0);

return(
    <Box bg={theme.colors.primary}  >
        <Pressable onPress={() => navigation.navigate("CartScreen")}>
        <VStack>
        <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }} >
        
        <Text mb={-4} mr={8} style={{ fontFamily: theme.fonts.semiBold, fontSize: 25, padding: 5 }}>
                
                    CONTINUAR
                </Text>
        <Box style={{ backgroundColor: theme.colors.white, height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
        <Badge  bg="yellow.400" colorScheme="danger" rounded="full" mb={-4} mr={-12} zIndex={1} variant="solid" alignItems="flex-start" _text={{fontSize: 12, color:'#000', fontWeight: 'extrabold'}}>
          {totalItems}
        </Badge>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/VectorBCar.png')} alt="Vector Bag" />
                </Box>
        
        </Box>
      </VStack>
      </Pressable>
    </Box>

    
)
}

export default ButtonNext;
