import React from "react";  
import { View, Text, StyleSheet, Button, Pressable } from "react-native"; 
import Item from "../components/item";


const All = ({ navigation }: { navigation: any }) => {
  
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
        <Item name="Mary" job="Manger" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Eric" job="Manger" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Hanna" job="SubLeader" />
      </Pressable>

    </View>
  )
}


export default All;