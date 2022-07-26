import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import All from "../screens/AllScreen";
import Bse from "../screens/Bse";
import Leader from "../screens/LeaderScreen";
import Manger from "../screens/MangerScreen";
import StackNavigator from "./StackNavigator";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#4682b4',
        }
      }}
    >
      <Tab.Screen
        name="All"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000000',
        }}
      />
      <Tab.Screen
        name="Manger"
        component={Manger}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Bse"
        component={Bse}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000000'
        }}
      />
      <Tab.Screen
        name="Leader"
        component={Leader}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000000'
        }}
      />
    </Tab.Navigator>
  )
}

