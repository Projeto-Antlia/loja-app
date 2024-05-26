import {
  NativeBaseProvider,
  Pressable,
  Text,
  Image,
  Box,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import { CartItem, useCart } from "../../contexts/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";

interface CardItemProps {
  id: string;
  name: string;
  category_id: string;
  image: string;
  quantidade?: number;
  price?: string;
}

export const CardItem: React.FC<CardItemProps> = ({
  id,
  name,
  category_id,
  image,
  price,
  quantidade,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { cartState, cartDispatch } = useCart();
  const isItemInCart = id in cartState.items;

  const handleChildQuantity = (value: number) => {
    console.log("Valor HandleQuantity", value);
    setQuantity(value);
  };

  const handleRemoveItem = () => {
    fecharModal();
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const lidarComPressaoNoModal = (event: any) => {
    event.stopPropagation();
  };

  const valorText = isItemInCart ? "Adicionado" : `R$: ${price}`;

  const addItemToCart = (item: CartItem) => {
    cartDispatch({ type: "ADD_ITEM", payload: item });
    setModalVisible(false);
  };

  return (
    <NativeBaseProvider>
      <Pressable
        h="320"
        w="200"
        onPress={abrirModal}
        rounded="8"
        bg="#ffff"
        marginBottom={10}
        shadow="9"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box
          borderTopRadius="10"
          h="200px"
          w="200px"
          p="14px"
          background={image ? "" : "#c9c9c9"}
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
          flexGrow={1}
          width="100%"
          alignItems={"center"}
          p="14px"
          borderRadius={10}
        >
          <Text
            color="#000"
            flexGrow={1}
            style={{ fontFamily: "Rubik_600SemiBold" }}
            fontSize="16px"
            textAlign={"center"}
          >
            {name}
            {"\n"}
            {quantidade}
          </Text>
          <Text
            bg={isItemInCart ? "#FFF" : "#ffbf1A"}
            color={isItemInCart ? "#22831A" : "#000"}
            borderWidth="0"
            w="100%"
            py="4px"
            rounded="lg"
            fontSize="16px"
            textAlign={"center"}
            style={{ fontFamily: "Rubik_700Bold" }}
          >
            {valorText}
          </Text>
        </Box>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          activeOpacity={1}
          onPress={fecharModal}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            activeOpacity={1}
            onPress={lidarComPressaoNoModal}
          >
            <Box
              w="85%"
              bg={theme.colors.white}
              rounded={30}
              p={8}
              alignItems={"center"}
            >
              <VStack w="100%" alignItems={"center"}>
                <Text fontFamily={theme.fonts.semiBold} fontSize={24} mb={12}>
                  Selecione a quantidade desejada
                </Text>

                <ItemCart
                  title={name}
                  image={image}
                  valor={`${price}`}
                  category_id={category_id}
                  quantidade={quantity}
                  onValueChange={handleChildQuantity}
                  onValueRemove={handleRemoveItem}
                  itemId={id}
                />
                <Pressable
                  justifyContent={"center"}
                  rounded={"10"}
                  alignItems={"center"}
                  w="100%"
                  py={6}
                  mt={4}
                  bg={theme.colors.primary}
                  onPress={() =>
                    addItemToCart({
                      product_id: id,
                      category_id: category_id,
                      name: name,
                      image: image,
                      quantidade: quantity,
                      price: price,
                    })
                  }
                >
                  <Text fontFamily={theme.fonts.semiBold} fontSize={20}>
                    ADICIONAR
                  </Text>
                </Pressable>
              </VStack>
            </Box>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </NativeBaseProvider>
  );
};
