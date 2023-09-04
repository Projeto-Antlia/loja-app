import { Pressable, Text, VStack, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import theme from '../../theme';

type Category = {
    id: string;
    name: string;
    image: string;
}

interface ButtonFilterProps {
    category: Category;
    emit: (category: Category) => void;
    isActive: boolean;
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({ category, emit, isActive = false }) => {

    const { name } = category;
    const [image, setImage ] = useState<string>();

    const loadCategoryImage = () => {
        switch(name){
            case 'CERVEJAS':
                setImage('https://i.ibb.co/nj9nhKk/bebidas.png')
                break;
            case 'LANCHES':
                setImage('https://i.ibb.co/9rBD0bt/lanches.png')
                break;
            case 'BEBIDAS':
                setImage('https://i.ibb.co/ZB14B2z/refrigerantes.png')
                break;
        }
    };

    const handlePress = () => {
        emit(category);
    }

    useEffect(() => {
        console.log("cartState use effect", image)
        loadCategoryImage();
    },[ name, image])

    const backgroundColor = isActive ? theme.colors.primary : theme.colors.white;

    return (
        <Pressable h='130' w='180' onPress={handlePress} p='2' display='flex' justifyContent="center" flexDirection='row' rounded="8" bg="#ffff" marginBottom={10} shadow="9" backgroundColor={backgroundColor} >
            <VStack justifyContent="space-around" alignItems={'center'}>
                <Image style={{ height: 70, width: 70 }}
                    src={image || ""}
                    alt="" />
                <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15">
                    {name}
                </Text>
            </VStack>
        </Pressable>
    )
}