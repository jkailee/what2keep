import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Launch({ navigation }) {
  return (
    <View>
      <Text>Launch</Text>
      <Button
        title="GOTO Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="GOTO Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
