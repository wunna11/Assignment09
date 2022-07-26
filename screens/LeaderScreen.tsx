import React from "react";  
import { View, Text, StyleSheet, Pressable } from "react-native";
import Item from "../components/item";


const Leader = ({ navigation }: { navigation: any }) => {

  const press = () => {
    return (
      navigation.navigate('Detail')
    )
  }


  return (
    <View>
      <Pressable onPress={press}>
        <Item name="John" job="Leader" />
      </Pressable>

      <Pressable onPress={press}>
        <Item name="Mary" job="Leader" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Eric" job="Leader" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Hanna" job="Leader" />
      </Pressable>
    </View>
  )
}

export default Leader;