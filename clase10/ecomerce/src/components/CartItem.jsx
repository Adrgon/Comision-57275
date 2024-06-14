import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";

const CartItem = ({cartItem}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} {cartItem.quantity}
        </Text>
        <Text>{cartItem.brand}</Text>
        <Text>{cartItem.price}</Text>
      </View>
    <Entypo name="trash" size={30} color="black" />
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({})
