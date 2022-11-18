import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

import { verificarCpf } from "../funcoes";


export default class IMC extends Component {

    constructor(props) {
        super(props);

        this.state = { altura: 0, peso: 0, resultado: ''};

        this.calcularImc = this.calcularImc.bind(this);
    }


    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.h1 }>
                    Altura
                </Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={( valor ) => {
                        this.setState({ altura : valor })
                    }}
                    keyboardType="numeric"
                />

                <Text style={ styles.h1 }>
                    Peso
                </Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={( valor ) => {
                        this.setState({ peso : valor })
                    }}
                    keyboardType="numeric"
                />

                <TouchableOpacity 
                    onPress={ this.calcularImc }
                    style={styles.botao}
                >
                    <Text style={ styles.texto }>
                        Verificar
                    </Text>
                </TouchableOpacity>

                <Text style={ styles.texto }>
                    { this.state.resultado }
                </Text>
            </View>
        );
    }


    calcularImc() {
        // realizar calculo do IMC
        let peso = this.state.peso;
        let altura = this.state.altura;
		let imc = (peso / (altura ** 2)).toFixed(2);
		
		// verificar IMC
		if (imc < 18.5) {
			resultado = "Abaixo do peso normal";
		} else if (imc >= 18.5 && imc < 24.9) {
			resultado = "Peso normal";
		} else if (imc >= 25.0 && imc < 29.9) {
			resultado = "Excesso de peso";
		} else if (imc >= 30.0 && imc < 34.9) {
			resultado = "Obesidade classe I - Kilos Mortais";
		} else if (imc >= 35.0 && imc < 39.9) {	
			resultado = "Obesidade classe III - Seriamente Kilos Mortais";
		} else if (imc >= 40.0) {	
			resultado = "Obesidade classe III - Partiu com comes e bebes";
		} else {
			resultado = "Erro! Digite os dados corretamente.";
		}
    }
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    h1: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  
    input: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      width: 300,
      borderWidth: 1
    }
  
  });