import {useState, useCallback } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import Header from "./src/components/Header";

import { colors } from "./src/global/colors";

import { useFonts } from "expo-font";
import ItemListCategory from "./src/screens/ItemListCategory";
import ItemDetail from './src/screens/itemDetail';

const Stack = createNativeStackNavigator()
export default function App() {


  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={ ({route})=> ({
              header: () => {
                return (
                  <Header 
                    title={
                      route.name === 'Home' 
                      ? "Categories"
                      : route.name === "ItemListCategory"
                      ? route.params.category
                      : "Detail"
                    }
                  />
                )
              }
            })}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="ItemListCategory"
              component={ItemListCategory}
            />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //marginTop: 60,
    flex: 1,
    backgroundColor: colors.lightGray,
    //alignItems: "center",
  },
});
