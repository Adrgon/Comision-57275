# Tab Navigation 

```
npm install @react-navigation/bottom-tabs
```
### App.js - Refactor para adatarnos a los sistemas de navegacion

```
import {StyleSheet,SafeAreaView,StatusBar,Platform} from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/Navigator";
export default function App() {
 const [fontsLoaded, fontError] = useFonts({
   Josefin: require("./assets/JosefinSans-Regular.ttf"),
 });
 if (!fontsLoaded || fontError) { return null }
 if (fontsLoaded && !fontError) {
   return (
     <SafeAreaView style={styles.container}>
       <Navigator />
     </SafeAreaView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   flex: 1,
   backgroundColor: colors.lightGray,
 },
});

```

### Navigator.jsx - Contenedor de Navegacion

```
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'


const Navigator = () => {
 return (
   <NavigationContainer>
       <HomeStackNavigator/>
   </NavigationContainer>
 )
}
export default Navigator

```

### Configuracion de navegacion basada en Stack

```
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/itemDetail";
const Stack = createNativeStackNavigator();
export default function HomeStackNavigator () {
return (
   <Stack.Navigator initialRouteName="Home" >
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
     <Stack.Screen component={ItemDetail} name="ItemDetail" />
  </Stack.Navigator>
 )}

```

### Navigator.jsx - Llamamos al componente de navegacion de Tabs

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator';
const Tab = createBottomTabNavigator()
const BottomTapNavigator = () => {
 return (
   <Tab.Navigator>
     <Tab.Screen name="Shop" component={HomeStackNavigator} />
     <Tab.Screen name="Shop" component={HomeStackNavigator} />
     <Tab.Screen name="Shop" component={HomeStackNavigator} />
   </Tab.Navigator>
 );
}
export default BottomTapNavigator

```

### Creacion del comonente Cart (rnfes)
### Creacion del comonente Order (rnfes)

### Configuracion de TabNavigator

```
<Tab.Navigator>
     <Tab.Screen name="Shop" component={HomeStackNavigator} />
     <Tab.Screen name="Cart" component={Cart} />
     <Tab.Screen name="Order" component={Order} />
   </Tab.Navigator>
```

### Contenedores navegacion

```
<Tab.Navigator>
     <Tab.Screen name="Shop" component={HomeStackNavigator} />
     <Tab.Screen name="Cart" component={CartStackNavigator} />
     <Tab.Screen name="Order" component={OrderStackNavigator} />
</Tab.Navigator>
```

### CartStack (Componente de navegacion para screen Cart)

```
import Cart from "../screens/Cart";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const CartStack = () => {
   return (
       <Stack.Navigator initialRouteName="CartScreen" >
           <Stack.Screen name="CartScreen" component={Cart} />
       </Stack.Navigator>
   );
};
export default CartStack;

```

### OrderStack (Componente de navegacion para screen Order)

```
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "../screens/Order";
const Stack = createNativeStackNavigator();
const OrderStackNavigator = () => {
 return (
   <Stack.Navigator
     initialRouteName="OrderScreen"
   >
     <Stack.Screen name="OrderScreen" component={Order} />
   </Stack.Navigator>
 );
};
export default OrderStackNavigator;

```

### Arreglamos el doble encabezado (HomeStackNavigator.jsx, CartStackNavigator.jsx, OrderStackNavigator.jsx)

```
Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
    headerShown: false
}}
>

```

### Personalizacion del encabezado
```
<Tab.Navigator
    screenOptions={({ route }) => ({
        header: () => {
            return <Header title={route.name} />
        },
})}>

```

### Estilos en el Tab
```
<Tab.Navigator
     screenOptions={({ route }) => ({
       header: () => {
         return (
           <Header
             title={route.name}
           />
         );
       },
       tabBarShowLabel: false,
       tabBarStyle: styles.tabBar,
     })}
   >
const styles = StyleSheet.create({
 tabBar: {
   backgroundColor: colors.green700,
   height: 60,
 },
});

```

### Personalizacion de la barra de Navegacion

```
<Tab.Screen name="Shop" component={HomeStackNavigator}
  options={{
    tabBarIcon: ({ focused }) => {
      return (
          <View>
               <FontAwesome5 name="store" size={24}
                 color={focused ? "black" : colors.green900}/>
             </View>
           )},
       }}
```

### Nos preparamos para recibir datos en Cart.jsx

```
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem";
const Cart = () => {
 const total = CartData.reduce((acumulador, currentItem) => (acumulador += currentItem.price * currentItem.quantity),0);
 return (
   <View style={styles.container}>
     <FlatList data={CartData} keyExtractor={(pepe) => pepe.id} renderItem={({ item }) => { return <CartItem cartItem={item} />;}}
     />
     <View style={styles.totalContainer}>
       <Pressable><Text>Confirm</Text></Pressable>
       <Text>Total: ${total}</Text>
     </View>
   </View>)}
export default Cart;
const styles = StyleSheet.create({
 container: {
   justifyContent: "space-between",
   flex: 1,
   marginBottom: 120,
 },
 totalContainer: {
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
 },
});


```

###  CartItem.jsx

```
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { Entypo } from "@expo/vector-icons";


const CartItem = ({ cartItem }) => {
 return (
   <View style={styles.card} onPress={() => {}}>
     <View style={styles.textContainer}>
       <Text style={styles.text}>
         {cartItem.title} ({cartItem.quantity})
       </Text>
       <Text style={styles.text2}>{cartItem.brand}</Text>
       <Text style={styles.text2}>${cartItem.price}</Text>
     </View>
     <Entypo name="trash" size={30} color="black" />
   </View>
 );
};
export default CartItem;
const styles = StyleSheet.create({
 card: {
   height: 100,
   backgroundColor: colors.lightGray,
   padding: 10,
   margin: 10,
   borderWidth: 2,
   borderRadius: 10,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
 },
 textContainer: {
   width: "70%",
   flexDirection: "column",
   justifyContent: "flex-start",
   alignItems: "flex-start",
 },
 text: {
   fontFamily: "Josefin",
   fontSize: 19,
   color: colors.green700,
 },
 text2: {
   fontFamily: "Josefin",
   fontSize: 14,
   color: colors.green900,
 },
});


```

### Nos preparamos para recibir datos en Order.jsx

```
import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderData from "../data/orders.json";
import OrderItem from "../components/OrderItem";


const OrderScreen = () => {
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
};


export default OrderScreen;


const styles = StyleSheet.create({});

```

###  OrderItem.jsx

```
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";
const OrderItem = ({ order }) => {
 const total = order.items.reduce(
   (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
   0
 );


 return (
   <View style={styles.card} onPress={() => {}}>
     <View style={styles.textContainer}>
       <Text style={styles.text}>
         {new Date(order.createdAt).toLocaleString()}
       </Text>
       <Text style={styles.text2}>${total}</Text>
     </View>
     <Feather name="search" size={30} color="black" />
   </View>
 );
};


export default OrderItem;


const styles = StyleSheet.create({
 card: {
   height: 100,
   backgroundColor: colors.lightGray,
   padding: 10,
   margin: 10,
   borderWidth: 2,
   borderRadius: 10,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
 },
 textContainer: {
   width: "70%",
   flexDirection: "column",
   justifyContent: "flex-start",
   alignItems: "flex-start",
 },
 text: {
   fontFamily: "Josefin",
   fontSize: 17,
   color: "black",
 },
 text2: {
   fontFamily: "Josefin",
   fontSize: 19,
   color: "gray",
 },
});


```


## Esto fue lo viste durante la clase. 
