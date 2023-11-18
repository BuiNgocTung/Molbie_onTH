import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Screen3({ route, navigation }) {
    const [name, setName] = useState(route.params?.name || '');
    const [job, setJob] = useState(route.params?.txtName || '');
    const [txt, setTxt] = useState(route.params?.txt || 'ADD JOIN');
    const [itemId, setItemId] = useState(route.params?.txtId || '');
    console.log(route.params?.txtId || '')
    
    const handleButtonPress = () => {
        if (itemId) {
            // Cập nhật mục theo ID
            navigation.navigate(route.params?.prevScreen, { jobUpdate: { id: itemId, name: job } });
        
        } else {
            // Thêm mục mới
            navigation.navigate("Screen2", { job });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Data/Button.png')} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.user}>
                    <Image source={require('../assets/Data/Avatar 31.png')} style={styles.avatar} />
                    <View>
                        <Text style={styles.userName}>Hi {name}</Text>
                        <Text>Have a great day ahead</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>{txt}</Text>
                <TextInput
                    style={styles.input}
                    value={job}
                    onChangeText={(text) => setJob(text)}
                    placeholder="Input your join"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>{txt}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 50,
        height: 50,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    userName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    inputContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: '100%',
        paddingLeft: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        height: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
