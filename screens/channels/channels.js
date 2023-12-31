import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import {API_URL} from '@env'
import { useSelector } from 'react-redux'
import { selectUname } from '../../slices/Unameslice'

const Channels = () => {
	const selector = useSelector(selectUname)
	
	return (
    	<SafeAreaView>
			<View>
				<Text>channels</Text>
			</View>
			<View>
				<Text>{selector}</Text>
			</View>
    	</SafeAreaView>
  	)
}

export default Channels

const styles = StyleSheet.create({})