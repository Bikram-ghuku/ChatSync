import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import { Image, Input } from 'react-native-elements'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { useNavigation } from '@react-navigation/native'
import {API_URL} from '@env'

const Signup = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        if (name == '' || email == '' || password == '') {
            alert('Please fill all the fields')
            return
        }
        fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                pswd: password
            })
        }).then((data) => {
            if (data.ok) {
                alert('User registered successfully')
                navigation.navigate('Login')
            } else {
                alert('User already exists')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <View style={{height: vh(100), width: vw(100)}}>
            <View style={styles.container}>
                <Image style={{width: 300, height: 300}} source={require('../../assets/icon.png')} />
                <Text style={{fontSize: 30, fontWeight: 900}}>Register User</Text>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Name: </Text>
                    <Input placeholder='Enter your username' style={styles.inputArea} leftIcon={<Icon name='user' size={24}/>} onChangeText={(text) => setName(text)}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Email: </Text>
                    <Input placeholder='Enter your username' style={styles.inputArea} leftIcon={<Icon2 name='mail' size={24}/>} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Password: </Text>
                    <Input placeholder='Enter your Password' style={styles.inputArea} leftIcon={<Icon name='lock' size={24}/>} secureTextEntry onChangeText={(text) => setPassword(text)}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={{color: '#ffffff'}}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: 500}}  onPress={() => navigation.navigate('Login')}>
                    Already have an account?
                    <Text style={{color: '#003399', fontWeight: '700'}}>
                        Login
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    inputs:{
        width: '80%'
    },
    inputsText:{},
    inputArea:{},
    button:{
        backgroundColor:'#003399',
        fontWeight: 500,
        height: '4%',
        width: '26%',
        borderRadius: 10,
        borderColor: 'black',
        borderCurve: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})