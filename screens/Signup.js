import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import { Image, Input } from 'react-native-elements'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


const Login = () => {
    return (
        <View style={{height: vh(100), width: vw(100)}}>
            <View style={styles.container}>
                <Image style={{width: 300, height: 300}} source={require('../assets/icon.png')} />
                <Text style={{fontSize: 30, fontWeight: 900}}>Register User</Text>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Name: </Text>
                    <Input placeholder='Enter your username' style={styles.inputArea} leftIcon={<Icon name='user' size={24}/>}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Username: </Text>
                    <Input placeholder='Enter your username' style={styles.inputArea} leftIcon={<Icon2 name='mail' size={24}/>}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.inputsText}>Password: </Text>
                    <Input placeholder='Enter your Password' style={styles.inputArea} leftIcon={<Icon name='lock' size={24}/>}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#ffffff'}}>Sign Up</Text>
                </TouchableOpacity>
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