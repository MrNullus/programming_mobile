$(document).ready(function () {
	// # Funções Auxiliares
	function setarTextoLabel(idlabel, txt) {
		$(idlabel).text(txt);
	}
	function pegarValDoCampo(elment, deveSerInt) {
		if (deveSerInt) {
			return parseInt($(elment).val());
		} else {
			return $(elment).val();
		}
	}
	function estaVazio(entrada) {
		if (entrada == '') {
			return true;
		} else {
			return false;
		}
	}

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
		if (entrada1 == entrada2) {
			return true;
		} else {
			return false;
		}
	}

	// # Função principal
	function verificarCpf(cpf) {
		// # Dados Iniciais
		let noveDigitos = capturarDigitosCpf(cpf)[0];
		let ultimos2Digitos = capturarDigitosCpf(cpf)[1];
		let digito10 = 0;
		let digito11 = 0;

		// # Validar se os digitos são iguais
		if (temDigitosIguais(cpf)) {
			setarTextoLabel('#lblErroCpf', "CPF invalido!");
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

		// # Validar os campos que devem ser validos (cpf valido e outros que não devem ser vazios)
		if (cpfValido) {
			return true;
		} else {
			setarTextoLabel('#lblMsg', "Curriculo cadastrado com sucesso!");
			setarTextoLabel('#lblErroCpf', "Insira um CPF valido!");
			return false;
		}
	}


	$('#btnCadastrar').click(function () {

		// # Dados Iniciais
		let txtsObrigadoriosVazios = false;
		let txtNome = pegarValDoCampo('#txtNome', false);
		let txtTelefone = pegarValDoCampo('#txtTelefone', true);
		let txtCpf = pegarValDoCampo('#txtCpf', false);
		let txtEndereco = pegarValDoCampo('#txtEndereco', false);

		// # Verificação inicial dos campos obrigatorios
		if (!estaVazio(txtNome)) {
			txtsObrigadoriosVazios = false;
		} else {
			txtsObrigadoriosVazios = true;
			setarTextoLabel('#lblErroNome', "Campo obrigatorio!");
		}

		if (!isNaN(txtTelefone) || !estaVazio(txtTelefone)) {
			txtsObrigadoriosVazios = false;
		} else {
			txtsObrigadoriosVazios = true;
			setarTextoLabel('#lblErroTel', "Campo obrigatorio!");
		}

		if (!isNaN(txtCpf) || !estaVazio(txtCpf)) {
			txtsObrigadoriosVazios = false;
		} else {
			txtsObrigadoriosVazios = true;
			setarTextoLabel('#lblErroCpf', "Campo obrigatorio!");
		}

		if (!estaVazio(txtEndereco)) {
			txtsObrigadoriosVazios = false;
		} else {
			txtsObrigadoriosVazios = true;
			setarTextoLabel('#lblErroEnder', "Campo obrigatorio!");
		}

		// # Verificações secundarias
		if (txtsObrigadoriosVazios) {
			return;
		}

		if (txtCpf.length != 11) {
			setarTextoLabel('#lblMsg', "Insira um CPF valido!");
			return;
		}
		
		if (verificarCpf(txtCpf)) {
			setarTextoLabel('#lblMsg', "Curriculo cadastrado com sucesso!");
		}

	});

});
