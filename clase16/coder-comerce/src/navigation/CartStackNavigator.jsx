

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
}

export default CartStackNavigator
