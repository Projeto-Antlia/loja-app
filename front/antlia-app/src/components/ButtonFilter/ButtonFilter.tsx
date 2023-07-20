import { Pressable, Text, VStack, Image } from 'native-base';
import React from 'react';


interface ButtonFilterProps {
    title: string;
    image: string;
    link?: string;
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({ title, image, link }) => {
    const buttonStyles = {
        h3: title,
        image: image
    };

    return (
        <Pressable h='130' w='180' onPress={() => window.alert(`i'm press ${title}`)} p='2' display='flex' justifyContent="center" flexDirection='row' rounded="8" bg="#ffff" marginBottom={10} shadow="9"  >
            <VStack justifyContent="space-around" alignItems={'center'}>
                <Image style={{ height: 70, width: 70 }}
                    src={image || ""}
                    alt="Vector Bag"
                />
                {/* <img src={image} alt="icone" /> */}
                <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15">
                    {title}
                </Text>
            </VStack>
        </Pressable>
    )
}