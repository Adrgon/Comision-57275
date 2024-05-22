//import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cuadros de colores</Text>

      {/*       <View style={styles.cyanBox}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.text}>Blue #2aa198</Text>
      </View>
      <View style={styles.cyanBox}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>   
 */}
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  cyanBox: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#2aa198",
  },
  blueBox: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#268bd2",
  },
  box: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
});
