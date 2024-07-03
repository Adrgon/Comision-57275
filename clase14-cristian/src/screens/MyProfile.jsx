import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

const MyProfile = ({navigation}) => {

  const [image, setImage] = useState(null)

  return (
    <View style={styles.container}>
      {image ?
        null :
        <>
          <Image
            style={styles.img}
            resizeMode='cover'
            source={require("../../assets/user.png")}
          />
          <Pressable
          onPress={()=> navigation.navigate("Image Selector")}
          style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
          >
            <Text style={{color: "#fff"}}>Add Profile Picture</Text>
          </Pressable>
        </>
      }
    </View>
  )
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