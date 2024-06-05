import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {colors} from '../global/colors'

import products from '../data/products.json'
import Search from '../components/Search';
import ProductItem from '../components/ProductItem.jsx'

const ItemListCategory = ({categorySelected = "", setCategorySelected = ()=>{}}) => {
  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  console.log(categorySelected)

  useEffect(()=>{
    
    const regex= /\d/
    const Digits = (regex.test(keyWord))
    console.log(Digits)

    if(Digits) {
      setError("Don't use digits")
      return
    }
    
    
    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    )
    const productsFiter = productsPreFiltered.filter(
      (product) => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
    console.log(productsFiter);
    setProductsFiltered(productsFiter)

  }, [keyWord, categorySelected])

  return (
    <View style={styles.flatListContainer}>
      {/* Search */}
      <Search onSearch={setKeyword} goBack={()=> setCategorySelected('')} />
      {/* FlatList --> ProductItem */}
      
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
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
