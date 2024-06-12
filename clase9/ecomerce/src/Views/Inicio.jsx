import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const Inicio = ({navigation}) => {
    //console.log(props)

    const info = {
        id: 245435234523452345345,
        total: 6000,
        medidas: {peso: 100, alto: 150}
    }

    console.log(navigation)
    const visitarNosotros = () => {
        navigation.navigate('Nosotros', info)
    }

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button 
        title='Ir a Nosotros'
        onPress={()=> visitarNosotros()}
      />
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({
    contenedor: {
        flex:  1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
