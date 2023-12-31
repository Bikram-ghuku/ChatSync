import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {API_URL} from '@env'
import { useSelector } from 'react-redux'
import { selectUname, selectToken, selectId } from '../../slices/Unameslice'
import { vh, vw } from 'react-native-expo-viewport-units'
import  Users from 'react-native-vector-icons/FontAwesome'
import User from 'react-native-vector-icons/FontAwesome'

const Channels = () => {
	const uname = useSelector(selectUname)
	const token = useSelector(selectToken)
	const id = useSelector(selectId)
	const [channels, setChannels] = useState([])
	useEffect(()=>{
		fetch(`${API_URL}/channels/channels`, {
			method: 'GET',
			headers:{
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
				Authorization: `Bearer ${token}` 
			}
		}).then(res => res.json())
		.then(data => {
			setChannels(data)
		})
		.catch(err => console.log(err))
	},[])
	
	return (
    	<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Chats</Text>
				</View>
				<View style={styles.chatsContainer}>
					<FlatList
						data={channels}
						renderItem={({item}) => (
							<TouchableOpacity style={styles.chatSelector}>
								{item.members.length > 2 ? <Users name="group" size={30} /> : <User name="user" size={30} />}
								<View>
									{
										item.members.map(member => {
											if(id.toString() !== member){
												return <Text>{member} </Text>
											}
										})
									}
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
    	</SafeAreaView>
  	)
}

export default Channels

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		flexDirection: 'column',
		height: vh(100),
		width: vw(100),
	},
	header: {
		width: vw(100),
		paddingTop: 40,
		paddingLeft: 20,
		fontSize: '2px',
		height: 150,
	},
	headerText: {
		fontSize: 50,
		fontWeight: 'bold',
	},
	chatsContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		overflowX: 'hidden',
		overflowY: 'scroll',
	},
	chatSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		height: 70,
		borderColor: 'black',
		borderBottomWidth: 1,
	}
})