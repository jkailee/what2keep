import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./components/Launch";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import Stats from "./components/Stats";
import StuffPage from "./components/StuffPage";
import ViewItem from "./components/ViewItem";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="EditItem" component={EditItem} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="StuffPage" component={StuffPage} />
        <Stack.Screen name="ViewItem" component={ViewItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
