import axios from "axios";
import { useState, useEffect } from "react";
import { ScrollView, FlatList } from "native-base";
import { URL_API } from "../../config";
import { CardItem } from "../CardItem/CardItem";

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

    }, [])

    return (
        <ScrollView ml='4.5%' h='67%'>
            {
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <CardItem
                            title={item.title}
                            image={item.image}
                            valor={item.valor}
                        />
                    )}
                />
            }
        </ScrollView>
    )
}

export default Products;