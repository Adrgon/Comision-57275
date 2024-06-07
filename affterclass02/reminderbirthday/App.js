import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Platform, Pressable, ScrollView } from 'react-native';
import data from './data'

import Header from './components/Header'
import { useState } from 'react';

import List from './components/List';
export default function App() {
  const [personas, setPersonas] = useState(data)
  //console.log(data)
  return (
    <SafeAreaView style={styles.contenedor}>
      <Header />

      <Image
        source={{ uri: "https://i.ytimg.com/vi/8xy8qIjdC3g/sddefault.jpg" }}
        style={styles.imagen}
      />

      <Text style={styles.textoBold}>{personas.length} Birthday today</Text>

      <ScrollView>
        <List personas={personas} />
      </ScrollView>

      <Pressable onPress={() => setPersonas([])}>
        <View style={styles.btnContenedor}>
          <Text style={styles.btnTexto}>Clear All</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,

    paddingTop: Platform.OS === 'ios' ? 10 : 50,
  },
  imagen: {
    height:150,
    width: "100%"
  }, 
  textoBold: {
    color: '#FFFFFC',
    fontSize: 22,
    marginBottom: 22,
    textAlign: 'center',
    backgroundColor: '#5E49E2',
    fontWeight: 900,
  },
  btnContenedor: {
    backgroundColor: '#5E49E2',
    padding: 10,
  },
  btnTexto: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    color: '#fffffa',
    fontWeight: 600,
  }
});
