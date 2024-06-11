import { StyleSheet, Text, View, Image } from 'react-native'


const List = ({personas}) => {
  return (
    <>
      {personas.map((persona) => {
        const {id, name, age, image} = persona

        return (
          <View key={id} style={styles.persona}>
            <Image source={{ uri: image }} style={styles.imagen} />
            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
              <Text style={styles.nombre}>{name}</Text>
              <Text style={styles.anios}>{age}</Text>
            </View>
          </View>
        );
      })}
    </>
  )
}

export default List

const styles = StyleSheet.create({
  persona: {
    alignItems: "center",
  },
  imagen: {
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  nombre: {
    fontSize: 20,
    padding: 10,
  },
  anios: {
    fontSize: 18,
    backgroundColor: "#5E49E2",
    padding: 10,
    borderRadius: 20,
    color: "#fffffC",
    fontWeight: 600,
  },
});
