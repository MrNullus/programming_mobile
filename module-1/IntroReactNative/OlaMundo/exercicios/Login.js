import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

import { verificarCpf } from "../funcoes";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { cpf: '', senha: '', resultado: '' };

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.h1 }>
          Login
        </Text>

        <Text style={ styles.textoComponente }>
          CPF
        </Text>
        <TextInput
          style={ styles.input }
          onChangeText={( cpfDigitado ) => {
            this.setState({ cpf : cpfDigitado })
          }}
          keyboardType="numeric"
        />

        <Text style={ styles.textoComponente }>
          Senha
        </Text>
        <TextInput
          style={ styles.input }
          onChangeText={( senhaDigitada ) => {
            this.setState({ senha : senhaDigitada })
          }}
          keyboardType="numeric"
        />


        <TouchableOpacity 
          onPress={ this.login }
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

  login() {
    let cpf   = this.state.cpf;
    let senha = this.state.senha;

    console.log("CPF: " + cpf + " | " + "SENHA: " + senha);
    if (verificarCpf(cpf) && senha == "12345") {
      this.setState({ resultado : 'Login efetuado com sucesso!' });
    } else {
      this.setState({ resultado : 'Tentativa de logar no sistema falhou... :(' });
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
    textAlign: 'center',
    marginBottom: 34
  },

  textoComponente: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
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