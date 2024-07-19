import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/Shop/ShopSlice";

const ProductItem = ({
  product,
  navigation
}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title))
    navigation.navigate("ItemDetail", { productoId: product.id });
  }

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textCategory: {
    color: colors.green900,
    width: '70%',
  },
  pressable : {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  }
});
