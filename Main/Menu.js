
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function main({ navigation }) {

    return (
        <View style={styles.container}>
       
                <Pressable  style={styles.bntUpdate} onPress={()=>{navigation.navigate("CRudAPI")}}>
                    <Text style={styles.text}>CRUD API</Text>
                </Pressable>

                <Pressable style={styles.bntDelete} onPress={()=>{navigation.navigate("CrudRedux")}}>
                    <Text style={styles.text}>CRUD REDUX</Text>
                </Pressable>

                <Pressable  style={styles.bntUpdate} onPress={()=>{navigation.navigate("CrudReduxTK")}}>
                    <Text style={styles.text}>CRUD REDUX-TOOLKIT</Text>
                </Pressable>

                <Pressable style={styles.bntDelete} onPress={()=>{navigation.navigate("PhepToan")}}>
                    <Text style={styles.text}>PHÉP TOÁN REDUX</Text>
                </Pressable>
                <Pressable  style={styles.bntUpdate} onPress={()=>{navigation.navigate("PhepToanRTK")}}>
                    <Text style={styles.text}>PHÉP TOÁN REDUX-TOOLKIT</Text>
                </Pressable>

               
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
       
        left:100
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
        width: 200,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
        marginBottom:20

    },
    bntDelete: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",

        width: 200,
        height: 100,
        borderRadius: 5,
        marginBottom:20
    },
    text: {
        fontWeight: '700',
        fontSize: 15,
        color: 'white'
    }
});