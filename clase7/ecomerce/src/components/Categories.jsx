import { FlatList, StyleSheet, View } from 'react-native'

import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from '../global/colors';

const Categories = () => {
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

export default Categories

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
