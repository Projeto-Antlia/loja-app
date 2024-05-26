import { Box } from "native-base";
import { useState, useEffect } from "react";
import { ButtonFilter } from "../Buttons/ButtonFilter/ButtonFilter";
import apiService from "../../utils/api";
import { ScrollView } from "react-native";


type Category = {
    id: string;
    name: string;
    image_id: string;
}
type Props = {
    onCategorySelected: (cat: Category) => void;
    categorySelected?: Category
}

const Categories = ({ onCategorySelected, categorySelected }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        apiService.get('/inventory/categories').then(res => {
            setCategories(res.data);
        })
        .catch(err => setCategories([]))
    }, [])

    const handleIsActive = (cat: Category) => {
        onCategorySelected(cat)
    }

    return (

        <Box display='flex' flexDirection='row' justifyContent="center" alignItems="center" >
            <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }} >
            {
                categories.map((item) => (
                    <ButtonFilter
                        key={item.id}
                        emit={handleIsActive}
                        isActive={categorySelected?.id === item.id}
                        category={item}
                    />
                ))
            }
            </ScrollView>
        </Box>
    )
}

export default Categories;