import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderData from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Order = () => {
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
}

export default Order

const styles = StyleSheet.create({})
