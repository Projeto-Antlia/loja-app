import React, {  useState } from "react";
import {
  Box,
  HStack,
  Text,
  Image,
  Pressable,
  Button,
} from "native-base";
import theme from "../../theme";
import { CartItem, useCart } from "../../contexts/CartContext"; // Importe o useCart

export interface IntConfirmationProps {
  title?: string;
  image?: string;
  quantidade?: number;
  onValueChange: (value: number) => void;
  onValueRemove: () => void;
  valor: string | undefined;
  category_id: string;
  itemId: string;
  flagCartSreen?: boolean;
  borderTopWidth?: string | number;
}

export const ItemCart: React.FC<IntConfirmationProps> = ({
  title,
  image,
  valor,
  category_id,
  quantidade,
  onValueChange,
  onValueRemove,
  itemId,
  flagCartSreen,
  borderTopWidth = 1,
}) => {
  const [quantity, setQuantity] = useState<number>(quantidade || 0);
  const isQuatityOne = quantidade === 1;
  const { cartState, cartDispatch } = useCart();

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(quantity + 1);
    console.log(newQuantity);

    if (flagCartSreen) {
      cartDispatch({ type: "INCREMENT_ITEM", payload: itemId });
    }
    onValueChange(newQuantity);
  };

  const decrement = (item: CartItem) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(quantity - 1);
      if (flagCartSreen) {
        cartDispatch({ type: "DECREMENT_ITEM", payload: itemId });
      }
      onValueChange(newQuantity);
      console.log("diminuindo", newQuantity);
    }
  };

  const removeItem = () => {
    cartDispatch({ type: "REMOVE_ITEM", payload: itemId });
    setQuantity(0);
    onValueRemove();
  };

  return (
    <HStack
      bg={theme.colors.white}
      w="100%"
      h="120px"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        borderColor="#ddd"
        borderWidth={1}
        h="120px"
        w="120px"
        p={4}
        background={image ? "" : "#c9c9c9"}
        borderTopWidth={borderTopWidth}
      >
        {image && (
          <Image
            style={{ flex: 1, resizeMode: "center" }}
            source={{ uri: image }}
            alt=""
          />
        )}
      </Box>

      <Box
        h="120px"
        flexGrow={1}
        px={2}
        justifyContent="center"
        borderColor="#ddd"
        borderWidth={1}
        borderLeftWidth="0"
        borderRightWidth="0"
        borderTopWidth={borderTopWidth}
      >
        <Text
          color="#616161"
          fontSize="16px"
          maxWidth="280px"
          mb={4}
          style={{ fontFamily: "Rubik_400Regular" }}
        >
          {title}
        </Text>
        <Text
          color={theme.colors.textPrimary}
          fontSize={20}
          style={{ fontFamily: "Rubik_600SemiBold" }}
        >
          {`R$: ${valor}`}
        </Text>
      </Box>

      <Box
        h="120px"
        pr={4}
        justifyContent="center"
        borderColor="#ddd"
        borderWidth={1}
        borderLeftWidth="0"
        borderTopWidth={borderTopWidth}
      >
        <HStack alignItems={"center"} justifyContent={"space-around"}>
          {isQuatityOne ? (
            <Pressable onPress={removeItem}>
              <Image source={require("../../assets/trash.png")} alt="Lixeira" />
            </Pressable>
          ) : (
            <>
              <Button
                onPress={() =>
                  decrement({
                    product_id: itemId,
                    category_id: category_id,
                    name: title,
                    image: image,
                    quantidade: quantity,
                    price: valor,
                  })
                }
                bg={theme.colors.primary}
                rounded={40}
                w="12"
                justifyContent={"center"}
              >
                <Text style={{ fontFamily: "Rubik_700Bold" }}>-</Text>
              </Button>
            </>
          )}
          <Text
            textAlign="center"
            w="60px"
            color={theme.colors.black}
            fontSize={35}
            style={{ fontFamily: "Rubik_600SemiBold" }}
          >
            {quantity}
          </Text>
          <Button
            onPress={increment}
            bg={theme.colors.primary}
            rounded={40}
            w="12"
          >
            <Text style={{ fontFamily: "Rubik_700Bold" }}>+</Text>
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};
