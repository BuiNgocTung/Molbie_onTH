
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Screen2({ navigation }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Gửi yêu cầu GET đến API
        fetch('http://localhost:3002/user')
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu từ API', error);
            });
    }, []);
    const [name, setName] = useState('');

    // Sửa hàm handUpdateCurrentTime để truyền userID và nameUpdate
    const handUpdate = async (userID, nameUpdate) => {
        try {
            const updateResponse = await fetch(`http://localhost:3002/user/${userID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameUpdate,
                }),
            });

            if (updateResponse.status === 200) {
                // Cập nhật thành công trên server, cần cập nhật trạng thái local
                const updatedData = data.map(item => {
                    if (item.id === userID) {
                        return { ...item, name: nameUpdate };
                    }
                    return item;
                });
                // Cập nhật trạng thái dữ liệu local với thông tin mới
                setData(updatedData);
                setName('');
            } else {
                // Xử lý khi cập nhật thất bại trên server
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật tên:', error);
        }
    };
    const handAdd = async (newName) => {
        try {
            const addResponse = await fetch('http://localhost:3002/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    // Nếu có các trường thông tin khác cần thêm, bạn có thể mở rộng body ở đây
                }),
            });
    
            if (addResponse.status === 201) {
                // Thêm thành công trên server, cần cập nhật trạng thái local
                // Lấy dữ liệu mới sau khi thêm từ server
                const addedData = await addResponse.json();
    
                // Thêm bản ghi mới vào trạng thái dữ liệu local
                setData([...data, addedData]);
                setName('');
            } else {
                // Xử lý khi thêm thất bại trên server
            }
        } catch (error) {
            console.error('Lỗi khi thêm bản ghi:', error);
        }
    };
    const handDelete = async (userID) => {
        try {
            const deleteResponse = await fetch(`http://localhost:3002/user/${userID}`, {
                method: 'DELETE',
            });
    
            if (deleteResponse.status === 200) {
                // Xóa thành công trên server, cần cập nhật trạng thái local
                const updatedData = data.filter(item => item.id !== userID);
                // Cập nhật trạng thái dữ liệu local sau khi xóa
                setData(updatedData);
            } else {
                // Xử lý khi xóa thất bại trên server
            }
        } catch (error) {
            console.error('Lỗi khi xóa bản ghi:', error);
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
                <Pressable onPress={() => { handUpdate(item.id, name) }} style={styles.bntUpdate}>
                    <Text style={styles.text}>Update</Text>
                </Pressable>

                <Pressable onPress={() => handDelete(item.id)} style={styles.bntDelete}>
                    <Text style={styles.text}>Delete</Text>
                </Pressable>
            </View>

        </View>
    );
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>

                <View style={styles.header} >
                    <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>MANAGER USER</Text>
                </View>

                <View style={{ justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => { handAdd(name) }}>
                        <Text style={{
                            fontSize: 30, fontWeight: 150, color: "white",
                            fontWeight: "bold"
                        }}>+</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ alignItems: 'center', marginBottom: 50, marginTop: 20 }}>
                <TextInput style={{ borderWidth: 1, width: 334, fontSize: 20, height: 44, borderRadius: 5, paddingLeft: 20 }}
                    value={name} onChangeText={(text) => { setName(text) }} placeholder="Enter user" ></TextInput>
            </View>

            <View >
                <ScrollView >
                    <FlatList
                        data={data}
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
    btnAdd: {
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
