import { Pressable, Text, VStack, Image } from 'native-base';
import React from 'react';
import theme from '../../../theme';
import {URL_API} from '../../../config';

type Category = {
    id: string;
    name: string;
    image_id: string;
}

interface ButtonFilterProps {
    category: Category;
    emit: (category: Category) => void;
    isActive: boolean;
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({ category, emit, isActive = false }) => {

    const { id, name, image_id } = category;

    const handlePress = () => {
        emit(category);
    }

    const backgroundColor = isActive ? theme.colors.primary : theme.colors.white;

    return (
        <Pressable h='130' w='180' onPress={handlePress} p='2' display='flex' marginRight={5} justifyContent="center" flexDirection='row' rounded="8" bg="#ffff" marginBottom={10} shadow="9" backgroundColor={backgroundColor} >
            <VStack justifyContent="space-around" alignItems={'center'}>
                { image_id && <Image style={{ height: 70, width: 70 }}
                    src={`${URL_API}/inventory/categories/${id}/image`}
                    alt="" /> }
                <Text color={theme.colors.black} style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="15">
                    {name}
                </Text>
            </VStack>
        </Pressable>
    )
}