import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './screens/Login';

export default function App() {
	
  return (
	<Provider store={store}>
		<SafeAreaView style={styles.container}>
			<Login/>
		</SafeAreaView>
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
