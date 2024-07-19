import { View, Text, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native' 

import Inicio from './src/Views/Inicio'
import Nosotros from './src/Views/Nosotros'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Nosotros" component={Nosotros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
