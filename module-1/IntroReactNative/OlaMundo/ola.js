import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Ola() {

	return (
		<View style={styles.container}>
			<Text style={styles.textoParagrafo}>
				Criando outra página para o App
			</Text>
			<Text>
				Outro texto
			</Text>

			<Button
				title='Press me'
				onPress={() => Alert.alert('RECEBA!!!')}
			/>

			<StatusBar style="auto" />
		</View>
	);

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},

	textoParagrafo: {
		fontSize: 19,
		color: 'white',
		textAlign: 'right',
		marginTop: 4,
		marginBottom: 4,
	}

});
