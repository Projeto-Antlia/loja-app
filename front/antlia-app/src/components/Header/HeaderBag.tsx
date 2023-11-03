import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import React from "react";
import { StackTypes } from "../../routes/Stack";

export default function HeaderBag() {
  const navigation = useNavigation<StackTypes>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoHome = () => {
    navigation.navigate("Screensaver");
  };

  return (
    <Box display="flex" justifyContent="space-between" h={110} px={4}>
      <HStack display="flex" justifyContent="space-between" alignItems="center">
        <Pressable
          bg="#ebebeb"
          borderRadius={10}
          w="15%"
          h="75%"
          mt={"2%"}
          onPress={handleGoBack}
        >
          <VStack alignItems={"center"} mt={"auto"}>
            <Image
              style={{ height: "60%", width: "40%" }}
              source={require("../../assets/home.png")}
              alt=""
            />
            <Text fontSize="15" fontFamily="Rubik_600SemiBold">
              VOLTAR
            </Text>
          </VStack>
        </Pressable>
        <Text fontSize="20">MEU CARRINHO </Text>
        <Pressable
          bg="#ebebeb"
          borderRadius={10}
          w="15%"
          h="75%"
          mt={"2%"}
          onPress={handleGoHome}
        >
          <VStack alignItems={"center"} mt={"auto"}>
            <Image
              style={{ height: "60%", width: "40%" }}
              source={require("../../assets/sair.png")}
            />
            <Text fontSize="15" fontFamily="Rubik_600SemiBold">
              SAIR
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
}
