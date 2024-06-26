import {useCallback, useState} from 'react'

import { StyleSheet, View } from 'react-native';

import Home from './src/screens/Home';
import Header from './src/components/Header';

import {colors} from './src/global/colors'

import {useFonts} from 'expo-font' 
import * as SplashScreen from "expo-splash-screen"
import ItemListCategory from './src/screens/ItemListCategory';

export default function App() {
  /* Configurar Fuente */

  const [fontsLoaded, fontError] = useFonts({
    'Josefin': require('./assets/JosefinSans-Regular.ttf')
  })

   const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded || fontError) {
       await SplashScreen.hideAsync();
     }
   }, [fontsLoaded, fontError]);

  /* Configurar Navegacion provisoria (pops) */
   const [categorySelected, setCategorySelected] = useState('')


  return (
    <View style={styles.container}>
      <Header title="Titulo" />
      {/* Mostrar Home o Categoria seleccionada */}
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : (
        <ItemListCategory setCategorySelected={setCategorySelected} categorySelected={categorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
  },
});
