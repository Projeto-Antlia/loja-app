import { Box, Text, Image, Badge, VStack } from "native-base";
import { Pressable } from "react-native";
import theme from "../../../theme/index";
import { useCart } from "../../../contexts/CartContext";
import { StackTypes } from "../../../routes/Stack";

interface ButtonNextProps {
  navigation: StackTypes;
}

const ButtonNext: React.FC<ButtonNextProps> = ({ navigation }) => {
  const { totalItems, isEmptyCart } = useCart();

  const handleContinue = () => navigation.navigate("CartScreen");

  const colorButton = isEmptyCart ? theme.colors.grey : theme.colors.primary;

  return (
    <Box bg={colorButton}>
      <Pressable disabled={isEmptyCart} onPress={handleContinue}>
        <VStack>
          <Box
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              mb={-4}
              mr={8}
              style={{
                fontFamily: theme.fonts.semiBold,
                fontSize: 25,
                padding: 5,
              }}
            >
              CONTINUAR
            </Text>
            <Box
              style={{
                backgroundColor: theme.colors.white,
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Badge
                bg={colorButton}
                colorScheme="danger"
                rounded="full"
                mb={-4}
                mr={-12}
                zIndex={1}
                variant="solid"
                alignItems="flex-start"
                _text={{ fontSize: 12, color: "#000", fontWeight: "extrabold" }}
              >
                {totalItems}
              </Badge>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/VectorBCar.png")}
                alt="Vector Bag"
              />
            </Box>
          </Box>
        </VStack>
      </Pressable>
    </Box>
  );
};

export default ButtonNext;
