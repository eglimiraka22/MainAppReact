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


const App = () => {
	function randomHex() {
		console.log("Color Changed");
		let letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }
	const [name, setname] = useState('Egli');
	const [session, setsession] = useState({ number: 6, title: 'state' });
	const [current,setcurrent]=useState(true)
	const[number ,setnumber]=useState(0)
	const[clicktimes,setclick]=useState(0)
	const[background,setbackground]=useState(randomHex())
	const onClickHandler = () => {
		setname('My name is Egli Miraka');
		setsession({number: 7,title:'Styling text'})
		setcurrent(false)
		setnumber(number+5)
		setclick(clicktimes+1)

		
	};
	return (
		<View style={[styles.body,{backgroundColor:background}]}>
			<Text style={styles.text}> {number}</Text>
		


			<Button title='ADD' onPress={onClickHandler}></Button>
			<Text style={styles.text}>You clicked {clicktimes} times</Text>
			<Button title='Change Color' onPress={() => setbackground(randomHex())}></Button>



		</View>
	);
};

const styles = StyleSheet.create({
	body: {
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
