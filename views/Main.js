
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function main({ navigation }) {

    return (
        <View style={styles.container}>
       
                <Pressable  style={styles.bntUpdate} onPress={()=>{navigation.navigate("redux")}}>
                    <Text style={styles.text}>Page Redux</Text>
                </Pressable>

                <Pressable style={styles.bntDelete} onPress={()=>{navigation.navigate("Api")}}>
                    <Text style={styles.text}>Page API</Text>
                </Pressable>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'

    },
    header: {
        marginTop: 20,
        marginLeft: 30,
        height: 50,
        width: 250,
        backgroundColor: "blue",
        paddingLeft: 20,
        justifyContent: 'center',
        borderRadius: 5
    },

    bntUpdate: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        width: 100,
        height: 50,
        marginRight: 10,
        borderRadius: 5

    },
    bntDelete: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",

        width: 100,
        height: 50,
        borderRadius: 5

    },
    text: {
        fontWeight: '700',
        fontSize: 15,
        color: 'white'
    }
});
