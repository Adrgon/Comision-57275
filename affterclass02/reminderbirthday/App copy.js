import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}></View>
      <View style={styles.imagen}></View>
      <View style={styles.contenido}></View>
      <View style={styles.pie}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    //height: "100%",
    //flex: 1,
    //flexDirection: 'column',
    //flexDirection: "row",
    //flexDirection: 'column-reverse'
    //flexDirection: "row-reverse",
    //justifyContent: "flex-start",
    //justifyContent: 'flex-end'.
    justifyContent: 'center',
    //justifyContent: 'space-between',
    //justifyContent: 'space-evenly',
    //justifyContent: 'space-around',
    //alignItems: 'stretch'
    //alignItems: 'flex-start'
    //alignItems: 'flex-end'
    alignItems: "center",
  },
  titulo: {
    padding: 20,
    backgroundColor: "navy",
  },
  imagen: {
    padding: 20,
    backgroundColor: "yellow",
  },
  contenido: {
    padding: 20,
    backgroundColor: "green",
  },
  pie: {
    padding: 20,
    backgroundColor: "teal",
  },
});
