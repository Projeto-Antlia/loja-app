import { useNavigation } from "@react-navigation/native"
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import React from "react";
import { useAuth } from "../../contexts/auth.context";

export default function HeaderMarket() {
    const { logout, user } = useAuth();

    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleGoHome = () => {
        logout();
    };

    return (
        <Box display='flex'
            justifyContent='space-between'
            h={110}
            px={4}
            borderBottomColor={'#C9C9C9'}
            borderBottomWidth={"1"}>
            <HStack display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Pressable
                    bg='#ebebeb'
                    borderRadius={10}
                    w='15%'
                    h='75%'
                    mt={'2%'}
                    onPress={handleGoBack}>
                    <VStack alignItems={'center'} mt={'auto'} >
                        <Image style={{ height: '60%', width: '40%' }}
                            source={require('../../assets/home.png')}
                        />
                        <Text fontSize="15" fontFamily="Rubik_600SemiBold">
                            INÍCIO
                        </Text>
                    </VStack>
                </Pressable>
                <Box alignItems="center">
                    <Text fontSize="16">BEM-VINDO</Text>
                    <Text fontSize="16" fontWeight="bold" lineHeight={20}>{user?.name.toUpperCase()}</Text>
                </Box>
                <Pressable
                    bg='#ebebeb'
                    borderRadius={10}
                    w='15%'
                    h='75%'
                    mt={'2%'}
                    onPress={handleGoHome}>
                    <VStack alignItems={'center'} mt={'auto'} >
                        <Image style={{ height: '60%', width: '40%' }}
                            source={require('../../assets/sair.png')}
                        />
                        <Text fontSize="15" fontFamily="Rubik_600SemiBold">
                            SAIR
                        </Text>
                    </VStack>
                </Pressable>
            </HStack>
        </Box>
    )
}