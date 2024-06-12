import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {colors} from '../global/colors'

import products from '../data/products.json'
import Search from '../components/Search';
import ProductItem from '../components/ProductItem.jsx'

const ItemListCategory = ({
  navigation,
  route,
}) => {
  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  const { category: categorySelected } = route.params;

  useEffect(()=>{
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyWord);
    if (hasDigits) {
      setError("Don't use digits");
      return;
    }

    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);

    if(!hasThreeOrMoreChar && keyWord.length){
      setError("Type 3 or more characters")
      return;
    }

    console.log(error)

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );

    const productsFiter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    console.log(productsFiter);
    setProductsFiltered(productsFiter);
    setError('')
  }, [keyWord, categorySelected])

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.green300,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
