import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import categories from "../data/categories.json";

const Home = (/* Recibir la categoria seleccionada */) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item, index, separators }) => (
          <CategoryItem 
            category={item} 
          />
        )}
      />
    </View>
  );
}

export default Home

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
