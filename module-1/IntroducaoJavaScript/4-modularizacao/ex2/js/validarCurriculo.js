$(document).ready(function () {
	// # Funções Auxiliares
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

	// # Funções Manipular calculo do CPF
	function calcNoveDigi(digitos, digInicio) {
		let soma = 0,
			mult = 0;

		for (let i = digInicio, d = 0; i >= 2; i--, d++) {
			let digito = parseInt(digitos[d]);

			console.log(digito);
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
		let digito10 = 0,
			resto = 0;

		resto = calcNoveDigi(digitos, 10);
		digito10 = Math.abs(obterDigito(resto));

		return (digito10);
	}

	function calcDigito11(digitos, digi10) {
		let digito11 = 0,
			resto = 0;
		digitos.push(digi10);

		resto = calcNoveDigi(digitos, 11);
		digito11 = Math.abs(obterDigito(resto));

		return (digito11);
	}

	// # Funções para capturar dos digitos do CPF de input
	function capturarDigitosCpf(cpf) {
		let noveDigitos = [];
		let doisDigitos = [];

		for (let i = 0; i <= cpf.length - 1; i++) {
			let digito = cpf[i];
			if (i > 8) {
				doisDigitos.push(digito);
			} else {
				noveDigitos.push(digito);
			}
		}

		return [noveDigitos, doisDigitos];
	}

	// # Validar se o CPF é valido ou não
	function validarCpf(entrada1, entrada2) {
		for (let i = 0; i <= entrada1.length - 1; i++) {
			console.log(entrada1[i] + " == " + entrada2[i]);
			if (entrada1 == entrada2) {
				return true;
			} else {
				return false;
			}
		}
	}



	$('#btnCadastrar').click(function () {

		// # Pegar valores
		let txtNome = pegarValDoCampo('#txtNome', false);
		let txtTelefone = pegarValDoCampo('#txtTelefone', true);
		let txtCpf = pegarValDoCampo('#txtCpf', false);
		let txtEndereco = pegarValDoCampo('#txtEndereco', false);
		let txtareaExperiencia = pegarValDoCampo('#txtareaExperiencia', false);


		// # Dados Iniciais
		let txtsObrigadoriosValidos = false;

		console.log(capturarDigitosCpf(txtCpf)[0]); // retorna os nove primeiros
		let noveDigitos = capturarDigitosCpf(txtCpf)[0];

		console.log(capturarDigitosCpf(txtCpf)[1]); // retorna os dois ultimos
		let ultimos2Digitos = capturarDigitosCpf(txtCpf)[1];

		let digito10 = 0;
		let digito11 = 0;


		// # Efetuar os calculos dos ultimos digitos do CPF
		digito10 = calcDigito10(noveDigitos);
		console.log(digito10);

		digito11 = calcDigito11(noveDigitos, digito10);
		console.log(digito11);


		// # Verfificar os digitos ultimos digitos do CPF
		let cpfValido = validarCpf(ultimos2Digitos, [digito10, digito11]);


		// # Validar os campos que devem ser validos (cpf valido e outros que não devem ser vazios)
		if (cpfValido) {
			txtsObrigadoriosValidos = true;
		} else {
			txtsObrigadoriosValidos = false;
			$('#lblErroCpf').text = "Insira um CPF valido!";
		}
		if (!iestaVazio(txtNome)) {
			txtsObrigadoriosValidos = true;
		} else {
			txtsObrigadoriosValidos = false;
			$('#lblErroNome').text = "Campo obrigadorio!";
		}
		if (!estaVazio(txtTelefone)) {
			txtsObrigadoriosValidos = true;
		} else {
			txtsObrigadoriosValidos = false;
			$('#lblErroTel').text = "Campo obrigadorio!";
		}
		if (!estaVazio(txtEndereco)) {
			txtsObrigadoriosValidos = true;
		} else {
			txtsObrigadoriosValidos = false;
			$('#lblErroEnder').text = "Campo obrigadorio!";
		}


		// # Verfificar os digitos ultimos digitos do CPF
		if (txtsObrigadoriosValidos) {
			$('#lblMsg').text = "Curriculo cadastrado com sucesso!";
		}

	});

});