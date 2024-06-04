import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import {colors} from './src/global/colors'

export default function App() {
  /* Configurar Fuente */

  /* Configurar Navegacion provisoria (pops) */

  return (
    <View style={styles.container}>
      <Header title="Titulo" />
      {/* Mostrar Home o Categoria seleccionada */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
  },
});
