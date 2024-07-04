import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AddButton from "../components/AddButton"



const ListAddress = ({ navigation }) => {
    return location ? (
        <AddressItem
            location={location}
            navigation={navigation}
        />
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>No location set</Text>
            <AddButton
                title="Set location"
                onPress={() => navigation.navigate("Location Selector")}
            />
        </View>
    )
}

export default ListAddress

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text: {
        paddingVertical: 20,
        fontFamily: "Josefin",
        fontSize: 18,
    },
})
