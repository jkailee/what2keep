import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="GOTO StuffPage"
        onPress={() => {
          navigation.navigate("StuffPage");
        }}
      />
      <Button
        title="GOTO Stats"
        onPress={() => {
          navigation.navigate("Stats");
        }}
      />
      <Button
        title="GOTO Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
