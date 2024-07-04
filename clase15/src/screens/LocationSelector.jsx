import { StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { colors } from "../global/colors"
import AddButton from "../components/AddButton" 

import * as Location from "expo-location"




const LocationSelector = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Address</Text>
      {location ? (
        <>
          <Text style={styles.text}>
            Lat: {location.latitude}, long: {location.longitude}.
          </Text>
          <MapPreview location={location} />
          <Text style={styles.address}>Formatted address: {address}</Text>
          <AddButton onPress={onConfirmAddress} title="Confirm address" />
        </>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  );
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        paddingTop: 20,
        fontFamily: "Josefin",
        fontSize: 18,
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.green300,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        fontSize: 16,
    },
})
