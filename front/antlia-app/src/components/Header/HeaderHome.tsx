import React from "react";
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";

export default function HeaderHome() {
    const navigation = useNavigation();

    const handleGoHome = () => {
        navigation.navigate('Rest');
    }

    return (
        <Box
            display="flex"
            justifyContent="space-between" // Espaço entre os elementos
            alignItems="center"
            h={110}
            w="100%"
            px={10}
            bg='#fff'
        >
            <Pressable
                bg='#ebebeb'
                borderRadius={10}
                w='15%'
                h='75%'
                mt={'2%'}
                onPress={handleGoHome}
                style={{ marginLeft: "auto" }}>
                <VStack alignItems={'center'} mt={'auto'} >
                    <Image style={{ height: '60%', width: '40%' }}
                        source={require('../../assets/sair.png')}
                    />
                    <Text fontSize="15" fontFamily="Rubik_600SemiBold">
                        SAIR
                    </Text>
                </VStack>
            </Pressable>
        </Box>
    );
}
