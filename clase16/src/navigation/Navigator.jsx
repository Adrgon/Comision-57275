import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'
import BottomTapNavigator from './BottomTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSession } from '../persistence'
import { setUser } from '../features/User/UserSlice'

const Navigator = () => {
  //const [user, setUser] = useState(null)
  const { user } = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  useEffect(()=>{
    (async () => {
      try {
        const response = await getSession();
        if(response.rows.length){
          const user = response.rows._array[0]
          console.log(user);
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token,
          }))
        }
        //console.log(response)
      } catch (error) {
        console.log(error)
      }
    })()
  })

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
