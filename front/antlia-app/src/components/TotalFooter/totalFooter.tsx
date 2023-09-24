import { Box, Text, Image, Badge, HStack } from "native-base";
import theme from '../../theme/index'
import { useCart } from '../../contexts/CartContext';

const TotalFooter = () => {
  const { cartState } = useCart();
  const totalteste = '20,50'

  return (
    <Box bg={theme.colors.secondary}  >
      <HStack>
        <Box style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', height: 100 }} >
          <Text mb={-4} ml={10} color={"white"} style={{ fontFamily: theme.fonts.semiBold, fontSize: 25, padding: 5 }}>
            DESPESA ATUAL
          </Text>
          <Text mb={-4} mr={10} color={"white"} style={{ fontFamily: theme.fonts.semiBold, fontSize: 25, padding: 5 }}>
            R$ {totalteste}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default TotalFooter;
