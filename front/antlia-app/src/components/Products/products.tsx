import axios from "axios";
import { Box, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { URL_API } from "../../config";
import { CardItem } from "../CardItem/CardItem";

type Category = {
    id: string;
    name: string;
    image: string;
}

type Product = {
    id: string;
    category_id: string;
    name: string;
    image: string;
    price: string;
}

const Products = ({ categorySelected }: { categorySelected?: Category }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        axios.get(`${URL_API}inventory/products`).then(res => {
            let products: Product[] = res.data;

            if (categorySelected) {
                products = products.filter(prod => prod.category_id === categorySelected.id)
            }

            setProducts(products);
        })

    }, [categorySelected])

    
    return (    
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            numColumns={3}
            style={{ flex: 1 }}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            renderItem={({ item }) => (
                <Box>
                    <CardItem
                        id={item.id}
                        name={item.name}
                        category_id={item.category_id}
                        image={`${URL_API}inventory/products/${item.id}/image`}
                        price={parseFloat(item.price).toFixed(2)}
                    />
                </Box>
            )}
        />
    )
}

export default Products;