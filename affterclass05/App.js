import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";
//import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";

import Navigator from "./src/navigation/Navigator";

import { Provider } from "react-redux";
import store from "./src/store";

//import { initSQLiteDB } from "./src/persistence"; 

import { useDB } from "./src/hooks/useDB";
import { useEffect } from "react";



export default function App() {

  const {initDB} = useDB()

/*   const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  }); */

  useEffect(()=>{
    initDB
  })

  /* if (!fontsLoaded && !fontError) {
    return null;
  } */

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});
