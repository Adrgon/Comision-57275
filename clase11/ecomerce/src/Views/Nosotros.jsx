import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Nosotros = ({navigation, route}) => {
    //console.log(route)
    const {id} = route.params
 
    const volver = () => {
    //navigation.navigate("Inicio");
    //navigation.goBack()
    navigation.push('Inicio');
 }

  return (
    <View style={styles.contenedor}>
      <Text>{id}</Text>
      <Button title="Volver" onPress={() => volver()} />
    </View>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
