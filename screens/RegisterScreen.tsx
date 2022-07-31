import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Register = ({navigation}: {navigation: any}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState({});

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    try {
      AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {
            navigation.navigate('Profile')
          }
        })
    } catch (e) {
      console.warn(e);
    }
  }


  const setData = async () => {

    if (!name || !email || !phone || !password || !confirmPassword || !(phone.length >= 8) || !(phone.length <= 12)) {

      if (!name) {
        setError((prev) => {
          return {
            ...prev,
            name: "Enter full name."
          };
        });
      }
  
      if (!email) {
        setError((prev) => {
          return {
            ...prev,
            email: "Enter your email address."
          };
        });
      }
      
      else if (email){ 
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) == false) {
          setError((prev) => {
            return {
              ...prev,
              email: "Email is incorrect!"
            };
          });
        }
      }
  
      if (!phone) {
        setError((prev) => {
          return {
            ...prev,
            phone: "Enter a phone number."
          };
        });
      }
      
      else if (!(phone.length >= 8) || !(phone.length <= 12)) {
        setError((prev) => {
          return {
            ...prev,
            phone: "Phone number must be between 8 digits and 12 digits!"
          };
        });
      }
  
      if (!password) {
        setError((prev) => {
          return {
            ...prev,
            password: "Enter password."
          };
        });
      }
  
      if (!confirmPassword) {
        setError((prev) => {
          return {
            ...prev,
            confirmPassword: "Enter Confirm Password"
          };
        });
      }
      else if (password !== confirmPassword) {
        setError((prev) => {
          return {
            ...prev,
            confirmPassword: "Password must be same!"
          };
        });
      }
    }

    else {
      try {
        var user = {
          Name: name,
          Email: email,
          Phone: phone,
          Password: password,
          ConfirmPassword: confirmPassword,
        }

        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Profile');
      } catch (e) {
        console.error(e);
      }
    }
  }

    


  return (
    <ScrollView>
  
        <Text style={styles.header}>Registration</Text>
        
        <View style={styles.input}>
          <Text>Full Name</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Full Name"
            keyboardType="default"
            onChangeText={(value) => setName(value)}
            value={name}
            
          />
          <Text style={{color: 'red'}}>{error.name}</Text>
        
        </View>
  
        <View style={styles.input}>
          <Text>Email Address</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Email Address"
            keyboardType="default"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        
          <Text style={{color: 'red'}}>{error.email}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Phone Number(enter only 10 digits number)</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={(value) => setPhone(value)}
            value={phone}
          />
        
          <Text style={{ color: 'red' }}>{error.phone}</Text>
        
        </View>
  
        <View style={styles.input}>
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            keyboardType="numeric"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        
          <Text style={{color: 'red'}}>{error.password}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            keyboardType="numeric"
            secureTextEntry={true}
            onChangeText={(value) => setConfirmPassword(value)}
            value={confirmPassword}
          />
          <Text style={{color: 'red'}}>{error.confirmPassword}</Text>
        </View> 
  
        
        <View style={styles.button}>
          <Button
            onPress={setData}
            title="Register"
            color="#841584" 
          />
        </View>
       
  
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50
  },

  input: {
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  },

  inputBox: {
    height: 40,
    borderWidth: 1,
    marginRight: 20,
    marginTop: 10,
  },

  button: {
    //alignItems: 'left',
    width: 100,
    textAlign: 'center',
    marginLeft: 20,
  }
    
});

export default Register;