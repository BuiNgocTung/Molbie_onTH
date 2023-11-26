
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Screen2({ navigation }) {

    const filldata = useSelector(state => state.todos);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const handADD = (namAdd) => {
        if (namAdd.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: { id: filldata.length + 1, name: namAdd } });
            setName('');
        } else {
            console.log('Tên không được để trống');
        }
    };

    const handleDeleteItem = (itemId) => {
        dispatch({ type: 'DELETE_TODO', payload: itemId });
    };
    const handleSaveItem = (itemId, updatedName) => {


        if (updatedName.trim() !== '') {
            dispatch({ type: 'UPDATE_TODO', payload: { id: itemId, name: updatedName } });
            setName('');
        } else {
            console.log('Tên không được để trống');
        }
       
    };


    // const handleSearch = (text) => {
    //     setJobUpdate(text); // Cập nhật state jobUpdate khi người dùng nhập vào ô tìm kiếm
    //   };
    //   const filteredJobs = filldata.filter((job) =>
    //   job.name.toLowerCase().includes(jobUpdate.toLowerCase())
    // );
    const render = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom: 20,
        }}>

            <TouchableOpacity onPress={() => { setName(item.name) }}>
                <TextInput
                    style={{ fontSize: 20, fontWeight: 'bold', width: 200 }}
                    value={item.name} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => { handleSaveItem(item.id, name) }} style={styles.bntUpdate}>
                    <Text style={styles.text}>Update</Text>
                </Pressable>

                <Pressable onPress={() => handleDeleteItem(item.id)} style={styles.bntDelete}>
                    <Text style={styles.text}>Delete</Text>
                </Pressable>
            </View>

        </View>
    );
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>

                <View style={styles.header} >
                    <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>MANAGER JOB</Text>
                </View>

                <View style={{ justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.bnt1} onPress={() => { handADD(name) }}>
                        <Text style={{
                            fontSize: 30, fontWeight: 150, color: "white",
                            fontWeight: "bold"
                        }}>+</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ alignItems: 'center', marginBottom: 50, marginTop: 20 }}>
                <TextInput style={{ borderWidth: 1, width: 334, fontSize: 20, height: 44, borderRadius: 5, paddingLeft: 20 }}
                    value={name} onChangeText={(text) => { setName(text) }} placeholder="enter job" ></TextInput>
            </View>

            <View >
                <ScrollView >
                    <FlatList
                        data={filldata}
                        renderItem={render}
                        keyExtractor={item => item.id.toString()}
                        numColumns={1}>
                    </FlatList>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

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
    bnt1: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 100,
        height: 50,
        width: 50,
        marginLeft: 10



    },
    bntUpdate: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        width: 60,
        height: 50,
        marginRight: 10,
        borderRadius: 5

    },
    bntDelete: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",

        width: 60,
        height: 50,
        borderRadius: 5

    },
    text: {
        fontWeight: '700',
        fontSize: 15,
        color: 'white'
    }
});
