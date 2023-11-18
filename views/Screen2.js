
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Screen2({ route, navigation }) {
    
    const filldata = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState(route.params?.name || '');
    const [jobUpdate, setJobUpdate] = useState('');


    useEffect(() => {
        if (route.params?.job) {
            dispatch({ type: 'ADD_TODO', payload: { id: filldata.length + 1, name: route.params.job } });
        }
    }, [route.params?.job]);

    const handleDeleteItem = (itemId) => {
        dispatch({ type: 'DELETE_TODO', payload: itemId });
    };

    const handleSaveItem = (itemId, updatedName) => {
        dispatch({ type: 'UPDATE_TODO', payload: { id: itemId, name: updatedName } });
    };

   useEffect(() => {
        if (route.params?.jobUpdate) {
            handleSaveItem(route.params.jobUpdate.id, route.params.jobUpdate.name);
        }
    }, [route.params?.jobUpdate]);

    const handleUpdateNavigation = (itemName,itemID) => {
       
           
            navigation.navigate('Screen3', 
            { 'name': route.params?.name, 
            'txt': 'Update Job', 
            'txtName': itemName, 
            'txtId': itemID, 
            'prevScreen': 'Screen2' });
       
    };
    const handleSearch = (text) => {
        setJobUpdate(text); // Cập nhật state jobUpdate khi người dùng nhập vào ô tìm kiếm
      };
      const filteredJobs = filldata.filter((job) =>
      job.name.toLowerCase().includes(jobUpdate.toLowerCase())
    );
    const render = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: 20,
        }}>

            <Pressable onPress={() => handleDeleteItem(item.id)}>
                <Image source={require('../assets/Data/mdi_marker-tick.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
            </Pressable>
            <TextInput
                style={{ fontSize: 20, fontWeight: 'bold' }}
                value={item.name}
                onChangeText={(text) => setJobUpdate(text)}
            />
            <Pressable onPress={() => handleUpdateNavigation(item.name,item.id)}>
                <Image source={require('../assets/Data/iconamoon_edit-bold.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
            </Pressable>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', }} >
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={require('../assets/Data/Button.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>


                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingRight: 20, }}>
                    <Image source={require('../assets/Data/Avatar 31.png')} style={{ width: 50, height: 50 }} />
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} > Hi {name}  </Text>
                        <Text> Have agate day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 50, marginTop: 20 }}>
                <TextInput style={{ borderWidth: 1, width: 334, fontSize: 20, height: 44, borderRadius: 5, paddingLeft: 20 }} onChangeText={
                    (text) => { handleSearch(text) }} placeholder="search" ></TextInput>
            </View>

            <View >
                <ScrollView >
                    <FlatList
                        data={filteredJobs}
                        renderItem={render}
                        keyExtractor={item => item.id.toString()}
                        numColumns={1}>
                    </FlatList>
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.bnt1} onPress={() => navigation.navigate('Screen3', { 'name': name })}>
                    <Text style={{ justifyContent: 'center', fontSize: 50, fontWeight: 150, color: "white", fontWeight: "bold", alignItems: 'center' }}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        // justifyContent: 'center',
    },
    bnt1: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        borderRadius: 50,
        width: 50,
        height: 50,
        marginTop: 50,

    }

});
