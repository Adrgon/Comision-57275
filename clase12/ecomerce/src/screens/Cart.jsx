import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartData from '../data/cart.json'
import CartItem from '../components/CartItem';


const Cart = () => {

/*       
  let totalGeneral = 0
    for(const currntItem of CartData){
        totalGeneral += currntItem.price * currntItem.quantity;
    } 
*/
    

  const total = CartData.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />

      <View style={styles.totalContainer}>
        <Pressable>
          <Text>Confirm Order</Text>
        </Pressable>
        <Text>Total: $ {total}</Text>
      </View>
    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
