import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

// export default function Login({ navigation }) {
//   return (
//     <View>
//       <Text>Login</Text>
//       <Button
//         title="GOTO Home"
//         onPress={() => {
//           navigation.navigate("Home");
//         }}
//       />
//     </View>
//   );
// }

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>Enter Email:</Text>
      <TextInput style={styles.input}/>
      <Text>Enter Password:</Text>
      <TextInput style={styles.input}/>
      <Button
        title="LOGIN"
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
