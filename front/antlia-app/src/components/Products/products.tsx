import axios from "axios";
import { useState, useEffect } from "react";
import { ScrollView, FlatList, Box } from "native-base";
import { URL_API } from "../../config";
import { CardItem } from "../CardItem/CardItem";
import { View } from "react-native";

type Category = {
    id: string;
    title: string;
    image: string;
}

type Product = {
    id: string;
    category_id: string;
    title: string;
    image: string;
    valor: string;
}

const Products = ({ categorySelected }: { categorySelected?: Category }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        axios.get(`${URL_API}/products`).then(res => {
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
                        title={item.title}
                        image={item.image}
                        valor={item.valor}
                    />
                </Box>
            )}
        />
    )
}

export default Products;