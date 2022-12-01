import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

import { verificarCpf } from "../funcoes";


export default class CPF extends Component {

  constructor(props) {
    super(props);

    this.state = { cpf: '', resultado: '' };

    this.verificarCpfDigitado = this.verificarCpfDigitado.bind(this);
  }


  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.h1 }>
          Digite um CPF
        </Text>

        <TextInput
          style={ styles.input }
          onChangeText={( cpfDigitado ) => {
            this.setState({ cpf : cpfDigitado })
          }}
          keyboardType="numeric"
        />

        <TouchableOpacity 
          onPress={ this.verificarCpfDigitado }
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

  verificarCpfDigitado() {
    console.log(verificarCpf(this.state.cpf));

    if (verificarCpf(this.state.cpf)) {
      this.setState({ resultado : 'CPF válido' });
    } else {
      this.setState({ resultado : 'CPF inválido' });
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