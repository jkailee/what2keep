import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function StuffPage({ navigation }) {
  return (
    <View>
      <Text>StuffPage</Text>
      <Button
        title="GOTO ViewItem"
        onPress={() => {
          navigation.navigate("ViewItem");
        }}
      />
      <Button
        title="GOTO AddItem"
        onPress={() => {
          navigation.navigate("AddItem");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
