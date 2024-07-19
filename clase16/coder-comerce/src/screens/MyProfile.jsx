import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import AddButton from '../components/AddButton'

import { useDispatch, useSelector } from "react-redux";
import { useGetProfileimageQuery } from '../services/shopServices'
import { clearUser } from '../features/User/UserSlice';
//import { truncateSessionsTable } from "../persistence";
import { useDB } from '../hooks/useDB'; // importar session

const MyProfile = ({navigation}) => {

      const dispatch = useDispatch()
      const { truncateSessionTable } = useDB() // preparo el metodo
      const {imageCamera, localId} = useSelector((state) => state.auth.value)
      const {data: imageFromBase} = useGetProfileimageQuery(localId)
      const launchCamera = async () => {
        navigation.navigate("Image Selector");
      };

      const launchLocation = async () => {
        navigation.navigate("List Address");
      };

      const defaultImageRoute = "../../assets/user.png";

      const signOut =  async () => {
        try {         
          if (Platform.OS !== "web") await truncateSessionsTable(); // borro la session
          dispatch(clearUser());
        } catch (error) {
          console.log({ errorSignOutDB: error });
        }
      }
  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.img}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require(defaultImageRoute)}
        />
      )}
      <AddButton
        onPress={launchCamera}
        title={
          imageFromBase || imageCamera
            ? "Modify profile picture"
            : "Add profile picture"
        }
      />
      <AddButton title="My address" onPress={launchLocation} />
      <AddButton onPress={signOut} title="Sign out" />
    </View>
  );
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.green700,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
  }
})
