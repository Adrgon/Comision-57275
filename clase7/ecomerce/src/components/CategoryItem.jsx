import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card';

// recibir la categoria seleccionada
const CategoryItem = ({ category }) => {
  return (
    <Card style={styles.cardContainer}> 
      {/*Agregar pressable */}
      <Text style={styles.text}>{category}</Text>
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
