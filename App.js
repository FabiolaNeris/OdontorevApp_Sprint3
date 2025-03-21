import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ResultadosScreen from "./screens/ResultadosScreen";
import HistoricoScreen from "./screens/HistoricoScreens";
import ProfileScreen from "./screens/ProfileScreen";
import CapturaFotoScreen from "./screens/CapturaFotoScreen";

const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ResultadosScreen" component={ResultadosScreen}/>
        <Stack.Screen name="HistoricoScreen" component={HistoricoScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="CapturaFotoScreen" component={CapturaFotoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;