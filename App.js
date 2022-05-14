import React, { useState } from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
	Linking,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => {
	const [name, setname] = useState('Egli');
	const [session, setsession] = useState({ number: 6, title: 'state' });
	const onClickHandler = () => {
		setname('My name is Egli Miraka');
		setsession({number: 7,title:'Styling text'})
		
	};
	return (
		<View style={styles.body}>
			<Text style={styles.text}> {name}</Text>
			<Text style={styles.text}> THis is  session number {session.number} and this session is about {session.title}</Text>

			<Button title='Update Text' onPress={onClickHandler}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#12ff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	text: {
		color: '#ffff',
		fontSize: 24,
		fontStyle: 'italic',
		margin: 50,
	},
});

export default App;
