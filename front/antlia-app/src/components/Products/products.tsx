import { Box, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { URL_API } from "../../config";
import { CardItem } from "../CardItem/CardItem";
import apiService from "../../utils/api";

type Category = {
  id: string;
  name: string;
  image_id: string;
};


type Product = {
  id: string;
  category_id: string;
  name: string;
  image: string;
  price: string;
  empty: boolean;
};

const Products = ({ categorySelected }: { categorySelected?: Category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  
  function createRows(data: Product[], columns:number) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { 
      data.push({
        id: `empty-${lastRowElements}-${new Date().getTime()}`,
        name: `empty-${lastRowElements}`,
        category_id: `empty-${lastRowElements}`,
        image: `empty-${lastRowElements}`,
        price:`empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1; 
    }
    return data; 
  }

  useEffect(() => {
    apiService
      .get("/inventory/products")
      .then((res) => {
        let products: Product[] = res.data;

        if (categorySelected) {
          products = products.filter(
            (prod) => prod.category_id === categorySelected.id
          );
        }

        setProducts(products);
      })
      .catch((err) => setProducts([]));
  }, [categorySelected]);

  return (
    <FlatList
      data={createRows(products, 3)}
      keyExtractor={(item) => item.id}
      numColumns={3}
      style={{ flexBasis: 1 }}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-between", gap:40, paddingHorizontal:20 }}
      renderItem={({ item }) => {
    if(item.empty){
      return (
      <Box style={{backgroundColor: "transparent", flexGrow:1}}>
        
      </Box>)
    }
        return (
          <Box>
            <CardItem
              id={item.id}
              name={item.name}
              category_id={item.category_id}
              image={`${URL_API}/inventory/products/${item.id}/image`}
              price={parseFloat(item.price).toFixed(2)}
            />
          </Box>
        )
      }}
    />
  );
};

export default Products;
