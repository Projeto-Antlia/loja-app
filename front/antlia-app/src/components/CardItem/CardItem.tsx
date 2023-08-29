import { HStack, NativeBaseProvider, Pressable, Text, Image, useToast } from 'native-base';
import React, { useState } from 'react';

interface CardItemProps {
    name: string;
    image: string;
    quantidade?: string;
    price?: string;
}

export const CardItem: React.FC<CardItemProps> = ({ name, image, price, quantidade, }) => {
    const toast = useToast();
    const buttonStyles = {
        h3: name,
        image: image,
        price: price,
        quantidade: quantidade
    };
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(true);
        toast.show({
            title: `${name} adicionado ao carrinho!`,
            placement: 'top-right'
        });
    }
    // modal aqui//
    ;
    const valorText = isPressed ? 'Adicionado' : `R$: ${price}`;

    return (
        <NativeBaseProvider>
            <Pressable h='250' w='200' onPress={handlePress} rounded="8" bg="#ffff" marginBottom={10} shadow="9" display='flex' flexDirection='column' justifyContent="space-around">
                <HStack alignItems={'center'} flexDirection='column' >
                    {console.log('imagem ----->', image)}
                    <Image 
                        style={{ height: 120, width: 120 }}
                        source={{
                            uri: image,
                            method: 'GET',
                            headers: {
                                Pragma: 'no-cache',
                            },
                        }}
                        alt="Alternate Text" 
                    />
                    <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15" textAlign={'center'}>
                        {name}{'\n'}{quantidade}
                    </Text>
                    <Text bg={isPressed ? '#FFF' : "#ffbf1A"} color={isPressed ? '#22831A' : "#000"} borderWidth="0" w='4/6' rounded="lg" textAlign={'center'} style={{ fontFamily: 'Rubik_700Bold' }}>
                        {valorText}
                    </Text>
                </HStack>
            </Pressable>
        </NativeBaseProvider>
    )
}