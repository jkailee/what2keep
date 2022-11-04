import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe' />
      <Text>Enter Email:</Text>
      <TextInput style={styles.input}/>
      <Text>Enter Password:</Text>
      <TextInput style={styles.input}/>
      <Text>Re-Enter Password:</Text>
      <TextInput style={styles.input}/>
      <Button
        title="GOTO Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
