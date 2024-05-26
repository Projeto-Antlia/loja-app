import React from "react";
import { Box, Image, Pressable, Text} from "native-base";
import {  ImageSourcePropType } from "react-native";
import { useAuth } from "../../contexts/auth.context";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";

interface ButtonProps {
    onPress?: () => void;
    text: string;
    source?: ImageSourcePropType;
  }
  const ButtonCustom = ({ onPress, text, source, ...props }: ButtonProps) => (
    <Pressable
      bg="#ebebeb"
      borderRadius={10}
      onPress={onPress}
      //style={{ marginLeft: "auto" }}
    >
      <Box alignItems={"center"} py={2} w={24}>
        <Box h={"10"} w={"10"}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={source}
            {...props}
            alt=""
          />
        </Box>
  
        <Text fontSize="15" fontFamily="Rubik_600SemiBold">
          {text}
        </Text>
      </Box>
    </Pressable>
  );



export const HomeButton = () => {
    const navigation = useNavigation<StackTypes>();
    const handleGoHome = () => {
        navigation.navigate("Home");
      };
    return (
        <ButtonCustom
        onPress={handleGoHome}
        text="Home"
        source={require("../../assets/home.png")}
    />   

    )
}
    
  
  
  export const BackButton = () => {
    const navigation = useNavigation<StackTypes>();
    const handleGoBack = () => {
    navigation.goBack();
  };
  
  return (
    <ButtonCustom
        onPress={handleGoBack}
        text="Voltar"
        source={require("../../assets/back.png")}
    />   
  )

  }
     
  
  
  export const LogOutButton = () => {
    const { logout } = useAuth();
    return (
        <ButtonCustom
         onPress={logout}
        text="Sair"
        source={require("../../assets/sair.png")}
    />  
    )
  }