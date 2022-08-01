import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';


export default function User() {


    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            setData(json.data)
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(() => {
        getData();
    })

    const Item = ({ id, email, name, lastName, image }: any) => {
        return (
            <View>
                <View style={styles.content}>
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginRight: 20,
                            marginVertical: 20
                        }}
                    />

                    <View style={styles.info}>
                        <Text style={{marginBottom: 10, fontSize: 20}}>{name} {lastName}</Text>
                        <Text>{email}</Text>
                    </View>
                    
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView>
            <FlatList
                data={data}
                
                renderItem={({ item }) => <Item
                    name={item.first_name} 
                    lastName={item.last_name}
                    email={item.email}
                    image={item.avatar}
                />
                }
                keyExtractor={item => item.id}
            >
            </FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    content: {
        textAlign: "left",
        flexDirection: 'row',
        borderBottomWidth : 1,
        borderBottomColor: '#000',
        marginHorizontal: 20
    },

    info: {
        marginTop: 30,
    }
});
