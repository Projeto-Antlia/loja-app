import { HStack, NativeBaseProvider, Pressable, Text, Image, useToast } from 'native-base';
import React, { useState } from 'react';

interface CardItemProps {
    title: string;
    image: string;
    // link?: string;
    quantidade?: string;
    valor?: string;
}

export const CardItem: React.FC<CardItemProps> = ({ title, image, valor, quantidade, }) => {
    const toast = useToast();
    const buttonStyles = {
        h3: title,
        image: image,
        valor: valor,
        quantidade: quantidade
    };
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(true);
        toast.show({
            title: `${title} adicionado ao carrinho!`,
            placement: 'top-right'
            // render: () => {
            //     return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            //         {`${title} adicionado ao carrinho!`}
            //     </Box>;
            // }
        });
    }
    // modal aqui//
    ;
    quantidade === '' ? quantidade = 'Garrafinha' : quantidade = quantidade + ' ML'
    const valorText = isPressed ? 'Adicionado' : `R$: ${valor}`;

    return (
        <NativeBaseProvider>
            <Pressable h='250' w='200' onPress={handlePress} rounded="8" bg="#ffff" marginBottom={10} shadow="9" display='flex' flexDirection='column' justifyContent="space-around">
                <HStack alignItems={'center'} flexDirection='column' >
                    <Image style={{ height: 120, width: 120 }}
                        src={image || ""}
                        alt="Vector Bag"
                    />
                    <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15" textAlign={'center'}>
                        {title}{'\n'}{quantidade}
                    </Text>
                    <Text bg={isPressed ? '#FFF' : "#ffbf1A"} color={isPressed ? '#22831A' : "#000"} borderWidth="0" w='4/6' rounded="lg" textAlign={'center'} style={{ fontFamily: 'Rubik_700Bold' }}>
                        {valorText}
                    </Text>
                </HStack>
            </Pressable>
        </NativeBaseProvider>
    )
}