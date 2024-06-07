import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.encabezado}>Birthday Reminders</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    encabezado: {
        backgroundColor: '#5E49E3',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFFFFC'
        
    }
})

export default Header
