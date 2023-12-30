import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './screens/user/Login';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Signup from './screens/user/Signup';
import Channels from './screens/channels/Channels';

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator initialRouteName='Home'>
						<Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
						<Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
						<Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
						<Stack.Screen name='Channels' component={Channels} options={{headerShown: false}} />
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
