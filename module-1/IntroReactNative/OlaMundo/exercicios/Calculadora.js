import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';


export default class exercicios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            operacao: '',
            valor1: 0,
            valor2: 0,
            resultado: ''
        };

        this.somar = this.somar.bind(this);
        this.subtrair = this.subtrair.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.dividir = this.dividir.bind(this);
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.textoComponente}>
                    Valor 1:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(valor) => {
                        this.setState({ valor1: valor })
                    }}
                    keyboardType="numeric"
                />


                <Text style={styles.textoComponente}>
                    Valor 2:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(valor) => {
                        this.setState({ valor2: valor })
                    }}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    onPress={this.somar}
                    style={styles.botao}
                >
                    <Text style={styles.texto}>
                        +
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.subtrair}
                    style={styles.botao}
                >
                    <Text style={styles.texto}>
                        -
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.calcular}
                    style={styles.botao}
                >
                    <Text style={styles.texto}>
                        *
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.dividir}
                    style={styles.botao}
                >
                    <Text style={styles.texto}>
                        /
                    </Text>
                </TouchableOpacity>

                <Text style={styles.texto}>
                    {this.state.resultado}
                </Text>
            </View>
        );
    }


    // #  Funções das Operações  #
    somar() {
        let valor1 = this.state.valor1;
        let valor2 = this.state.valor2;
        let resultado = "";

        if (valor1 == ''  || valor2 == '') {
            resultado = '* Preencha os campos para prosseguir';
            this.setState({ resultado: resultado });
            return;
        }
        if (isNaN(valor1) || isNaN(valor2)) {
            resultado = 'Informe apenas valores numéricos';
            this.setState({ resultado: resultado });
            return;
        }
        
        resultado = (parseFloat(this.state.valor1) + parseFloat(this.state.valor2));
        this.setState({ resultado: resultado });
    }
    subtrair() {
        let valor1 = this.state.valor1;
        let valor2 = this.state.valor2;
        let resultado = "";

        if (valor1 == ''  || valor2 == '') {
            resultado = '* Preencha os campos para prosseguir';
            this.setState({ resultado: resultado });
            return;
        }
        if (isNaN(valor1) || isNaN(valor2)) {
            resultado = 'Informe apenas valores numéricos';
            this.setState({ resultado: resultado });
            return;
        }

        resultado = (parseFloat(valor1) - parseFloat(valor2));
        this.setState({ resultado: resultado });
    }
    multiplicar() {
        let valor1 = this.state.valor1;
        let valor2 = this.state.valor2;
        let resultado = "";

        if (valor1 == ''  || valor2 == '') {
            resultado = '* Preencha os campos para prosseguir';
            this.setState({ resultado: resultado });
            return;
        }
        if (isNaN(valor1) || isNaN(valor2)) {
            resultado = 'Informe apenas valores numéricos';
            this.setState({ resultado: resultado });
            return;
        }

        resultado = (parseFloat(valor1) * parseFloat(valor2));
        this.setState({ resultado: resultado });
    }
    dividir() {
        let valor1 = this.state.valor1;
        let valor2 = this.state.valor2;
        let resultado = "";

        if (valor1 == ''  || valor2 == '') {
            resultado = '* Preencha os campos para prosseguir';
            this.setState({ resultado: resultado });
            return;
        }
        if (isNaN(valor1) || isNaN(valor2)) {
            resultado = '* Informe apenas valores numéricos';
            this.setState({ resultado: resultado });
            return;
        }

        resultado = (parseFloat(valor1) / parseFloat(valor2));
        this.setState({ resultado: resultado });
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center',
        textAlign: 'center',
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
        textAlign: 'center',
        marginTop: 90,
        marginBottom: 12,
    }

});