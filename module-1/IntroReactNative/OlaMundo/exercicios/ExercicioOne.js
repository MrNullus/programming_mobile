
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Ola() {

	return (
		<View style={styles.container}>

			<View style={styles.box}>
				<Text style={styles.textoParagrafo}>
					# Criar um novo projeto (com Expo CLI)
				</Text>	
				<Text>
					expo init &lt;NomeDoProjeto&gt;
				</Text>
			</View>

			<View style={styles.box}>
				<Text style={styles.textoParagrafo}>
					# Inicializar e gerar o bundle para a emulação do projeto
				</Text>	
				<Text>
					expo start
				</Text>
			</View>
			

		</View>
	);

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		paddingTop: 53
	},

	box: {
		color: '#e5e5e5e9',
		padding: 21,
		backgroundColor: '#f9f9f9',
	},
	
	textoParagrafo: {
		fontWeight: '900',
		fontSize: 16,
		color: 'black',
		textAlign: 'right',
		marginTop: 4,
		marginBottom: 4,
	}

});
