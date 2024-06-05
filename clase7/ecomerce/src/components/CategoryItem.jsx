import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card';

// recibir la categoria seleccionada
const CategoryItem = ({ category, selectCategory = () =>{}}) => {
  return (
    <Card style={styles.cardContainer}>
      {/*Agregar pressable */}
      <Pressable onPress={()=>selectCategory(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10, 
        marginVertical: 10,
    }, 
    text: {
        fontSize: 20,
    }
})
