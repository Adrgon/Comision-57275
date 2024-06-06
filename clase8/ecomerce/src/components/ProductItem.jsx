import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({
  product
}) => {
  return (
    <Card style={styles.additionalStylesCard}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
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
  },
});
