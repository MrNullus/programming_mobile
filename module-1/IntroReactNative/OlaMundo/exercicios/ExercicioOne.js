
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
			
			<View style={styles.box}>
				<Text style={styles.textoParagrafo}>
					# Instalar as dependencias
				</Text>	
				<Text>
					npm install
				</Text>
			</View>

		</View>
	);

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: 'snow',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 53
	},

	box: {
		width: '100%',
		padding: 23,
		backgroundColor: '#fff',
		marginTop: 12,
		marginBottom: 12,
		color: '#736663'
	},	
	
	textoParagrafo: {
		fontWeight: 'bold',	
		fontSize: 15,
		color: '#625EE6',
		textAlign: 'left',
		marginTop: 4,
		marginBottom: 9,
		textDecorationLine: 'underline',
		textShadowColor: 'black',
		textShadowOffset: {width: 34, height: 34},
	}

});
