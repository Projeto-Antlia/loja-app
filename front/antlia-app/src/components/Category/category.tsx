import axios from "axios";
import { Box } from "native-base";
import { useState, useEffect } from "react";
import { URL_API } from "../../config";
import { ButtonFilter } from "../Buttons/ButtonFilter/ButtonFilter";
import apiService from "../../utils/api";


type Category = {
    id: string;
    name: string;
    image: string;
}
type Props = {
    onCategorySelected: (cat: Category) => void;
    categorySelected?: Category
}

const Categories = ({ onCategorySelected, categorySelected }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [images, setImages] = useState("https://ibb.co/5Kjsn6v")

    useEffect(() => {
        const url = `${URL_API}inventory/categories`

        apiService.get('/inventory/categories').then(res => {
            setCategories(res.data);
        })
        .catch(err => setCategories([]))
    }, [])

    const handleIsActive = (cat: Category) => {
        onCategorySelected(cat)
    }

    return (

        <Box display='flex' flexDirection='row' justifyContent='space-evenly' >
            {
                categories.map((item, index) => (
                    <ButtonFilter
                        key={index}
                        emit={handleIsActive}
                        isActive={categorySelected?.id === item.id}
                        category={item}
                    />
                ))
            }
        </Box>
    )
}

export default Categories;