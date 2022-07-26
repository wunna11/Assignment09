import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detail from "../screens/DetailScreen";
import All from "../screens/AllScreen";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All1" component={All} options={{headerShown: false}} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}