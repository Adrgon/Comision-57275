import React, { useEffect, useState } from "react";

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";


import allProducts from "../data/products.json";

const ItemDetail = ({ 
  idSelected, 
}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );

    setProduct(productSelected);
  }, [idSelected]);

  console.log(product);

  return (
    <View>
      {product ? (
        <View style={styles.mainContainer}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart"></Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },

  textContainer: {
    flexDirection: "column",
  },
});
