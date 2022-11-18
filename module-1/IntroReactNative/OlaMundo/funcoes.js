
// # Funções para manipular o calculo do CPF
function calcNoveDigitos(digitos, digInicio) {
    let soma = 0, mult = 0;

    for (let i = digInicio, d = 0; i >= 2; i--, d++) {
        let digito = parseInt(digitos[d]);

        mult = digito * i;
        soma += mult;
    }

    return (soma % 11);
}
function obterDigito(res) {
    if (res < 2) {
        return 0;
    } else if (res > 2) {
        return (res - 11);
    }
}

// # Funções especificas para calcular os dois ultimos digitos do CPF
function calcDigito10(digitos) {
    let digito10 = 0, resto = 0;

    resto = calcNoveDigitos(digitos, 10);
    digito10 = Math.abs(obterDigito(resto));

    return (digito10);
}
function calcDigito11(digitos, digi10) {
    let digito11 = 0, resto = 0;
    digitos.push(digi10);

    resto = calcNoveDigitos(digitos, 11);
    digito11 = Math.abs(obterDigito(resto));

    return (digito11);
}

// # Funções para capturar dos digitos do CPF do input
function capturarDigitosCpf(cpf) {
    let noveDigitos = [];
    let doisDigitos = '';

    for (let i = 0; i < cpf.length; i++) {
        let digito = cpf[i];
        if (i > 8) {
            doisDigitos += digito;
        } else {
            noveDigitos.push(digito);
        }
    }

    return [noveDigitos, doisDigitos];
}

// # Validar se o CPF é valido ou não
function temDigitosIguais(cpf) {
    let qtdeDigitosIguais = 0;
    for (let d = 0; d <= cpf.length; d++) {
        let i = d + 1;
        if (cpf[d] == cpf[i]) {
            qtdeDigitosIguais++;
        }
    }

    if (qtdeDigitosIguais >= 11) {
        return true;
    } else {
        return false;
    }
}
function validarDoisUltimosDigitos(entrada1, entrada2) {
    if (entrada1 === entrada2) {
        return true;
    } else {
        return false;
    }
}

// # Função principal
export function verificarCpf(cpf) {
    // # Dados Iniciais
    let noveDigitos = capturarDigitosCpf(cpf)[0];
    let ultimos2Digitos = capturarDigitosCpf(cpf)[1];
    let digito10 = 0;
    let digito11 = 0;

    // # Validar se os digitos são iguais
    if (temDigitosIguais(cpf)) {
        return;
    }

    // # Efetuar os calculos dos ultimos digitos do CPF
    digito10 = calcDigito10(noveDigitos);
    digito11 = calcDigito11(noveDigitos, digito10);

    // # Verfificar os digitos ultimos digitos do CPF
    let ultimosDigiCalculados = digito10.toString() + digito11.toString();
    let cpfValido = validarDoisUltimosDigitos(
        ultimos2Digitos, ultimosDigiCalculados
    );

    console.log(digito11);

    // # Validar os campos que devem ser validos (cpf valido e outros que não devem ser vazios)
    if (cpfValido) {
        return true;
    } else {
        return false;
    }
}