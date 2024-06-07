import {useState, useCallback } from "react";


import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from "react-native";

import Home from "./src/screens/Home";
import Header from "./src/components/Header";

import { colors } from "./src/global/colors";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ItemListCategory from "./src/screens/ItemListCategory";
import ItemDetail from './src/screens/itemDetail';


export default function App() {
  /* Configurar Fuente */

  /* Configurar Navegacion provisoria (pops) */
  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Titulo" />
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : !itemIdSelected ? (
        <ItemListCategory
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          setItemIdSelected={setItemIdSelected}
        />
      ) : (
        <ItemDetail
          idSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //marginTop: 60,
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
  },
});
