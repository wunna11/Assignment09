import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


export default function Item({name, job}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Ionicons
          name="person-circle-sharp" size={50} color="black"
          style={styles.icon}
        />
        <View style={styles.info}>
          <Text style={styles.text}>{name}</Text>
          <Text>{job}</Text>
        </View>
      </View>
      
      <View style={styles.content2}>
        <AntDesign name="staro" size={30} color="black" style={{marginRight: 10}} />
        <Feather name="phone-call" size={30} color="black" />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 15
  },

  content1: {
    textAlign: "left",
    flexDirection: 'row'
  },

  content2: {
    textAlign: "right",
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 10,
    bottom: 28,
  },

  icon: {
    marginRight: 20
  },

  text: {
    fontSize: 20
  },

  info: {
    flexDirection: 'column'
  }
})