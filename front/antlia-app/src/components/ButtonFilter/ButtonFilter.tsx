import { Pressable, Text, VStack, Image } from 'native-base';
import React from 'react';

type Category = {
    id: string;
    title: string;
    image: string;
}

interface ButtonFilterProps {
    category: Category;
    emit: (category: Category) => void;
    isActive: boolean;
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({ category, emit, isActive = false }) => {

    const { title, image } = category;

    const handlePress = () => {
        emit(category);
    }

    const backgroundColor = isActive ? "#FFBF1A" : "#fff";

    return (
        <Pressable h='130' w='180' onPress={handlePress} p='2' display='flex' justifyContent="center" flexDirection='row' rounded="8" bg="#ffff" marginBottom={10} shadow="9" backgroundColor={backgroundColor} >
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