import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="GOTO Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});