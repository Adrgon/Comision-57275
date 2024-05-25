import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("./assets/bg.jpg")} style={styles.banner} />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Avengers</Text>
      </View>
      <ScrollView horizontal>
        <View>
          <Image
            source={require("./assets/theavengers.jpg")}
            style={styles.films}
          />
        </View>
        <View>
          <Image
            source={require("./assets/ageofultron_.jpg")}
            style={styles.films}
          />
        </View>
        <View>
          <Image
            source={require("./assets/infinitywar.jpg")}
            style={styles.films}
          />
        </View>
        <View>
          <Image
            source={require("./assets/endgame.jpg")}
            style={styles.films}
          />
        </View>
        <View>
          <Image
            source={require("./assets/secretwar.jpg")}
            style={styles.films}
          />
        </View>
      </ScrollView>

      <Text style={styles.titulo}>Avenger Originales</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/ironman.jpg")}
            style={styles.character}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/capitanamerica.jpg")}
            style={styles.character}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/thor.jpg")}
            style={styles.character}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/hulk.jpg")}
            style={styles.character}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/hawkeye.jpg")}
            style={styles.character}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/blackwidow.jpg")}
            style={styles.character}
          />
        </View>
      </View>

      <Text style={styles.titulo}>Peliculas Relacionados</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/movie1.jpg")}
            style={styles.character}
          />
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/movie2.jpg")}
            style={styles.character}
          />
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/movie3.jpg")}
            style={styles.character}
          />
        </View>
        <View style={styles.listadoItem}>
          <Image
            source={require("./assets/movie4.jpg")}
            style={styles.character}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  banner: {
    flex: 1,
    height: 250,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 12,
    textAlign: 'center'
  },
  films: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  character: {
    width: '100%',
    height: 200,
    marginVertical: 8

  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }, 
  listadoItem: {
    flexBasis: '45%'
  }
});
