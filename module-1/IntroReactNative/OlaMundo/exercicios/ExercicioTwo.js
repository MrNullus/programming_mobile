
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function Ola() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../src/images/logo-skyrim.png')}
          style={styles.imagemTitulo}
        />

        <Text style={styles.titulo}>
          The Elder Scrolls
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.box}>
          <Text style={styles.paragrafo}>
            A história de Skyrim, mesmo quem ainda não jogou, conhece. A tela, escura, clareia aos poucos, e o jogador se vê na pele de um prisioneiro em primeira pessoa. Suas mãos estão atadas, e ele sacoleja no banco de uma carroça de madeira, junto com outros capturados, atravessando uma floresta fria. Um deles, finalmente, fala: “Que bom, você acordou.”
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.paragrafo}>
            É assim que começa uma das sagas mais épicas da história dos videogames. Escrever sobre Skyrim é um desafio quase tão grande quanto jogar Skyrim: o papel em branco apresenta possibilidades e caminhos infinitos, e, às vezes, o texto, assim como o jogador, acaba seguindo caminhos que ele não imaginava que existiam. Escrevo há muitos anos, assim como jogo Skyrim há muitos anos, e uma experiência nunca é igual à anterior. É como eu sempre digo: nós nunca paramos de jogar Skyrim, apenas os intervalos entre uma playthrough e outra é que aumentam.
          </Text>
        </View>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#020100',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },

  header: {
    backgroundColor: '#ecf6f7',
    width: '100%',
    height: 200,
    paddingTop: 23,
    alignItems: 'center',
  },

  titulo: {
    textAlign: 'center',
    fontSize: 29,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },

  imagemTitulo: {
    height: 300,
    width: 150,
    marginBottom: 12,
  },

  main: {
    width: '100%',
    height: '50%',
    marginTop: 200,
    alignItems: 'center',
  },

  box: {
    width: '90%',
    height: 100,
    paddingLeft: 14,
    paddingRight: 14,
  }, 

  paragrafo: {
    color: '#fff',
    textAlign: 'justify',
    letterSpacing: 2
  }

});
