import React from "react";  
import { View, Text, StyleSheet, Pressable } from "react-native";
import Item from "../components/item";


const Bse = ({ navigation }: { navigation: any }) => {

  const press = () => {
    return (
      navigation.navigate('Detail')
    )
  }

  return (
    <View>
      <Pressable onPress={press}>
        <Item name="John" job="BSE" />
      </Pressable>

      <Pressable onPress={press}>
        <Item name="Mary" job="BSE" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Eric" job="BSE" />
      </Pressable>

      <Pressable onPress={press} >
        <Item name="Hanna" job="BSE" />
      </Pressable>
    </View>
  )
}


export default Bse;