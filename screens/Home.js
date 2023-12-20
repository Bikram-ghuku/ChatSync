import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vh, vw } from 'react-native-expo-viewport-units'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/icon.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#003399'}}>
                       Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#003399'}}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:vh(100),
        width:vw(100),
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        width: vw(100),
        height: vh(90),
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    },
    button:{
        fontWeight: 500,
        height: vh(7),
        width: '50%',
        borderRadius: 10,
        borderColor: '#003399',
        borderCurve: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})