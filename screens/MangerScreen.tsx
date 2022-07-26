import React from "react";  
import { View, Text, StyleSheet, Pressable } from "react-native";
import Item from "../components/item";


const Manger = ({ navigation }: { navigation: any }) => {

  const press = () => {
    return (
      navigation.navigate('Detail')
    )
  }


  return (
    <View>
      <Pressable onPress={press}>
        <Item name="John" job="Manger" />
      </Pressable>

      <Pressable onPress={press}>
        <Item name="Mary" job="Manger" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Eric" job="Manger" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Hanna" job="Manger" />
      </Pressable>
    </View>
  )
}



export default Manger;