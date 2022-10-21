import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ViewItem({ navigation }) {
  return (
    <View>
      <Text>ViewItem</Text>
      <Button
        title="GOTO EditItem"
        onPress={() => {
          navigation.navigate("EditItem");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
