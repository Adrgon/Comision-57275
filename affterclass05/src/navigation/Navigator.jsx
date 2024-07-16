import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'
import BottomTapNavigator from './BottomTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
//import { getSession } from '../persistence'
import { setUser } from '../features/User/UserSlice'

import { useDB } from '../hooks/useDB'

const Navigator = () => {
  //const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth.value)
  const {getSession} = useDB()
  useEffect(()=>{
    ( async () => {
      try {
        const response =  await getSession();
        console.log(response);
        if(response){
          const user = response;
          dispatch(
            setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token,
            })
          )
        }
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
