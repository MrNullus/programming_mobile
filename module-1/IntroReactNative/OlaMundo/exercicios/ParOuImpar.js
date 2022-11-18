import React, { Component } from "react";

import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';



export default class ParImpar extends Component {

  constructor(props) {

    super(props);



    //criando states 



    this.state = {

      numeroDigitado: 0,

      resultado: ''

    }



    //preciso dar bind da função criada na nossa classe ParImpar 

    this.verificarNumeroParImpar = this.verificarNumeroParImpar.bind(this);



  }



  render() {

    return (

      <View style={styles.container}>



        <Text style={styles.textoComponente} >

          Digite valor:

        </Text>



        <TextInput

          placeholder="Digite somente números"

          onChangeText={(valorDigitado) => this.setState({ numeroDigitado: valorDigitado })}   //perceba uso da função setState dentro do evento onChangeText 

          style={styles.input}

        //keyboardType='numeric'         

        />

        <TouchableOpacity onPress={this.verificarNumeroParImpar} style={styles.botao} >

          <Text style={styles.textoComponente}> PAR | IMPAR </Text>

        </TouchableOpacity>



        <Text style={styles.textoComponente}>

          {this.state.resultado}

        </Text>

      </View>

    )

  }



  verificarNumeroParImpar() {

    let verificacao = '';

    let valorInformado = this.state.numeroDigitado;



    if (valorInformado == '') {

      verificacao = 'Campo valor é de preenchimento obrigatório';

      this.setState({ resultado: verificacao });

      return;

    }



    if (isNaN(valorInformado)) {

      verificacao = 'Informe apenas valores numéricos';

      this.setState({ resultado: verificacao });

      return;

    }



    if (parseInt(valorInformado) % 2 == 0) {

      verificacao = 'Número informado é Par';

      this.setState({ resultado: verificacao });

      return;

    } else {

      verificacao = 'Número informado é Impar';

      this.setState({ resultado: verificacao });

      return;

    }



  }



}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    alignItems: 'center',  //alinhamento horizontal 

    justifyContent: 'center' //alinhamento vertical  



  },

  botao: {

    borderColor: 'black',

    borderWidth: 1,

    backgroundColor: '#f88',

    width: 200,

    borderRadius: 25,



  },

  input: {

    marginBottom: 20,

    textAlign: 'center',

    fontSize: 20,

    marginTop: 10,

    width: 300,

    borderWidth: 1,



  },

  textoComponente: {

    fontSize: 20,

    fontWeight: 'bold',

    textAlign: 'center'

  }



}) 