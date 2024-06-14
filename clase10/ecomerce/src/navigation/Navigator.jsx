import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'
import BottomTapNavigator from './BottomTapNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTapNavigator />

    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})
