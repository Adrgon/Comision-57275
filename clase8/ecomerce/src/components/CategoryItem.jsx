import { StyleSheet, Text, Pressable } from 'react-native'


import Card from './Card';
import { colors } from '../global/colors';

const CategoryItem = ({ category, selectCategory = () =>{}}) => {
  return (
    <Card style={styles.cardContainer}>
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
        textAlign: 'center',
        color: colors.black
    }
})
