import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import { Image, Input } from 'react-native-elements'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { useNavigation } from '@react-navigation/native'
import {API_URL} from '@env'
import { useDispatch } from 'react-redux'
import { setUname } from '../../slices/Unameslice'


const Login = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statusMsg, setStatusMsg] = useState('')
    const handleButtonPress = () => {
        if (email == '' || password == '') {
            alert('Please fill all the fields')
            return
        }
        setStatusMsg('Logging in...')
        fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                email: email,
                pswd: password
            })
        }).then((data) => {
            if (data.ok) {
                alert('User logged in successfully')
                data.json().then((data) => {
                    console.log(data)
                    dispatch(setUname(data.name))
                })
                navigation.navigate('Channels')
                setStatusMsg('Login success')
            } else {
                alert('Invalid Credentials')
                setStatusMsg('Invalid Credentials')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <View style={{height: vh(100), width: vw(100)}}>
            <View style={styles.container}>
                <Image style={{width: 300, height: 300}} source={require('../../assets/icon.png')} />
                <Text style={{fontSize: 30, fontWeight: 900}}>Login</Text>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Email: </Text>
                    <Input placeholder='Enter your username' style={styles.inputArea} leftIcon={<Icon2 name='mail' size={24}/>} onChangeText={(text) => {setEmail(text)}}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Password: </Text>
                    <Input secureTextEntry placeholder='Enter your Password' style={styles.inputArea} leftIcon={<Icon name='lock' size={24}/>} onChangeText={(text) => setPassword(text)}/>
                </View>
                <Text>{statusMsg}</Text>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={{color: '#ffffff'}}>Login</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                    Don't have an account?
                    <Text style={{color: '#003399', fontWeight: '700'}} onPress={() => navigation.navigate('Signup')}>
                        Signup
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default Login

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