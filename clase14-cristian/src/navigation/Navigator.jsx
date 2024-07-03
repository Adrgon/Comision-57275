import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'
import BottomTapNavigator from './BottomTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

const Navigator = () => {
  //const [user, setUser] = useState(null)
  const { user } = useSelector((state) => state.auth.value)
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      {/* <BottomTapNavigator /> */}
      {user ? <BottomTapNavigator /> : <AuthStackNavigator />}

    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})
