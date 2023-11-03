import {
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import React, { useEffect, useState } from "react";
import { Box, ScrollView, VStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import DtlMoth from "../../components/DtlMoth/DtlMoth";
import HeaderBag from "../../components/Header/HeaderBag";
import { ItemCart } from "../../components/ItemCart/ItemCart";
import { TotalMkt } from "../../components/TotalMkt/TotalMkt";
import { useCart } from "../../contexts/CartContext";
import { StackTypes } from "../../routes/Stack";
import { createOrderFromCart } from "../../service/orderService";
import apiService from "../../utils/api";

export default function HndbScreen() {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });
  const [quantity, setQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState(0);
  const [confirmation, setConfirmation] = useState(false);
  const { cartState, cartDispatch } = useCart();
  const navigation = useNavigation<StackTypes>();

  const handleChildQuantity = (value: number) => {
    console.log("Valor HandleQuantity", value);
    setQuantity(value);
  };

  const handleRemoveItem = (itemId: string) => {
    // Implemente a lógica para remover o item do carrinho com base no itemId
    // Você pode usar cartDispatch para despachar a ação 'REMOVE_ITEM'
  };

  const calculateSubtotal = (): string => {
    let total = 0;

    for (const itemId in cartState.items) {
      const item = cartState.items[itemId];
      if (item && item.quantidade) {
        const itemSubtotal =
          item.quantidade * (item.price ? parseFloat(item.price) : 0);
        total += itemSubtotal;
      }
    }
    return total.toFixed(2);
  };

  const placeOrder = async () => {
    const order = createOrderFromCart(cartState.items);
    console.log("PlaceOrder");
    //console.log('Pedido a ser enviado', order);
    try {
      const response = await apiService.post("orders/", order);
      console.log("Resposta da API:", response.data); //deixar esse console, futuramente substituir LOG melhorado
      cartDispatch({ type: "CLEAR_CART" });
      navigation.navigate("OrderSucessScreen", { order: response?.data });
    } catch (error) {
      console.error("Erro ao fazer a solicitação POST:", error);
      throw error; // Você pode tratar o erro de acordo com sua lógica
    }
  };

  useEffect(() => {
    const newSubtotal = calculateSubtotal();
    setSubtotal(parseFloat(newSubtotal));
  }, [cartState, cartState.items]);

  if (!fontLoaded) {
    return null;
  }

  const styles = {
    container: {
      flex: 1,
      "align-items": "center",
      "justify-content": "center",
    },
    header: {
      grow: 1,
      backgroundColor: "blue",
      height: 100,
      "justify-content": "center",
    },
    footer: {
      grow: 1,
      height: 100,
      "justify-content": "center",
    },
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderBag />
      <Box h="76%" bg="#E9E9E9">
        <DtlMoth />
        <VStack h="85%">
          <ScrollView>
            {Object.values(cartState.items).map((item) => (
              <ItemCart
                key={item.product_id}
                title={item.name}
                image={item.image}
                valor={item.price}
                category_id={item.category_id}
                quantidade={item.quantidade}
                onValueChange={handleChildQuantity}
                onValueRemove={() => handleRemoveItem(item.product_id)}
                itemId={item.product_id}
                flagCartSreen={true}
                borderTopWidth={0}
              />
            ))}
          </ScrollView>
        </VStack>
      </Box>
      <TotalMkt subtotal={subtotal} onPlaceOrder={placeOrder} />
    </KeyboardAvoidingView>
  );
}
