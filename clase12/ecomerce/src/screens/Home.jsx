import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../global/colors";
import categories from "../data/categories.json";

//import Counter from "../components/Counter";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.flatListContainer}>
{/*       <Counter /> */}
      <FlatList
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;

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
