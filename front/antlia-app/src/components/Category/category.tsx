import axios from "axios";
import { Box } from "native-base";
import { useState, useEffect } from "react";
import { URL_API } from "../../config";
import { ButtonFilter } from "../ButtonFilter/ButtonFilter";


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
        axios.get(url).then(res => {
            setCategories(res.data);
        })
        .catch(err => console.log("erro"))
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