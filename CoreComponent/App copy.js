//import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';



export default function App() {

  return (
    <SafeAreaView>
      <View style={[{backgroundColor: 'teal'}, styles.container]}>
        <Text>Hola desde React Native</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)', 
    //padding: 10,
/*     
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20 
    */
   //paddingHorizontal: 10,
   //paddingVertical: 20,
   //alignItems: 'center'
   //flex: 1,
   //justifyContent: 'center'
  }
})
