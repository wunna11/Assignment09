import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
        AsyncStorage.getItem('UserData')
            .then(value => {
                if (value != null) {
                    let user = JSON.parse(value);
                    setName(user.Name);
                    setEmail(user.Email);
                    setPhone(user.Phone);
                    setPassword(user.Password);
                    setConfirmPassword(user.ConfirmPassword);
                }
            })
    } catch (error) {
        console.log(error);
    }
}


  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Password: {password}</Text>
      <Text>ConfirmPassword: {confirmPassword}</Text>
    </View>
  )
}