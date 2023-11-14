import React, { useMemo } from "react";
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth.context";
import { Button, ImageSourcePropType } from "react-native";

export default function HeaderHome() {
  const { logout } = useAuth();
  const screenName = useNavigationState(
    (state) => state.routes[state.index].name
  );

  console.log(screenName);

  const headerProps = useMemo(() => {
    if (screenName === "Home") {
      return {
        textButton: "Home",
        imageButton: require("../../assets/home.png"),
        headerInformationName: "BEM-VINDO",
      };
    }

    if (screenName === "Home") {
      return {
        textButton: "Home",
        imageButton: require("../../assets/home.png"),
        headerInformationName: "BEM-VINDO",
      };
    }

    if (screenName !== "Home" && "MarketScreen") {
      return {
        textButton: "Home",
        imageButton: require("../../assets/home.png"),
        headerInformationName: "BEM-VINDO",
      };
    }
  }, [screenName]);

  return (
    <Box
      display="flex"
      flexDir={"row"}
      justifyContent="space-between" // Espaço entre os elementos
      alignItems="center"
      h={110}
      w="100%"
      px={10}
      bg="#ffffff"
    >
      <Box>
        {screenName !== "Home" && (
          <ButtonCustom
            onPress={logout}
            text={headerProps?.textButton || ""}
            source={headerProps?.imageButton}
          />
        )}
      </Box>

      <Box>
        {screenName !== "Home" && (
          <Text fontSize="15" fontFamily="Rubik_600SemiBold">
            {"teste"}
          </Text>
        )}
      </Box>

      <Box>
        <ButtonCustom
          onPress={logout}
          text="Sair"
          source={require("../../assets/sair.png")}
        />
      </Box>
    </Box>
  );
}

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
