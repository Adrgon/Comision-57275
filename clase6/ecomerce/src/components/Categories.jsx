import { FlatList, StyleSheet, Text, View } from 'react-native'

import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={category => category}
        data={categories}
        renderItem={({ item, index, separators }) => 
          <CategoryItem 
            category={item}
          />}
      />
    </View>
  );
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
