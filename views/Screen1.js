import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Screen1({ navigation }) {
  const [name, setName] = useState(''); // State để lưu trữ giá trị nhập vào TextInput

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/Data/Image 95.png')} style={{ width: 300, height: 300 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: "center", color: "purple" }}>MANAGE YOUR TASK</Text>
        <TextInput
          style={{
            justifyContent: "center",
            marginTop: 50,
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            width: 350,
            paddingLeft: 20
          }}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)} // Cập nhật giá trị vào biến 'name'
        />
      </View>
      <TouchableOpacity style={styles.bnt1} onPress={() => navigation.navigate('Screen2', { 'name': name })}>
        <Text style={{ fontSize: 23, fontWeight: 'bold', color: "white" }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBnt2: {
    alignItems: "center", justifyContent: "center",
  },
  bnt1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    width: 250,
    height: 50,
    marginTop: 50
  }
});
