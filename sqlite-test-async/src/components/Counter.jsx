import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementByAmount, reset } from "../features/Counter/CounterSlice";


const Counter = () => {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  const [inputToAdd, setInputToAdd] = useState(null);
  
  //let count = 0

  console.log(count);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          style={styles.spanInput}
          onChangeText={setInputToAdd}
          value={inputToAdd}
        />
        <Pressable
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.green300,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.green900,
  },
  span: {
    backgroundColor: colors.lightGray,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: colors.platinum,
  },
  spanInput: {
    backgroundColor: colors.lightGray,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: colors.green900,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Josefin",
  },
});
