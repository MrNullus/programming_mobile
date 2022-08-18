$(document).ready(function () { 

	$('#btnCalcularImc').click(function () {
		
		// inicializar dados
		let mensagem = "";
		let peso = parseFloat($('#txtPeso').val());
		let altura = parseFloat($('#txtAltura').val());
		
		// realizar calculo do IMC
		let imc = (peso / (altura ** 2)).toFixed(2);
		
		// verificar IMC
		if (imc < 18.5) {
			mensagem = "Abaixo do peso normal";
		} else if (imc >= 18.5 && imc < 24.9) {
			mensagem = "Peso normal";
		} else if (imc >= 25.0 && imc < 29.9) {
			mensagem = "Excesso de peso";
		} else if (imc >= 30.0 && imc < 34.9) {
			mensagem = "Obesidade classe I - Kilos Mortais";
		} else if (imc >= 35.0 && imc < 39.9) {	
			mensagem = "Obesidade classe III - Seriamente Kilos Mortais";
		} else if (imc >= 40.0) {	
			mensagem = "Obesidade classe III - Partiu com comes e bebes";
		} else {
			mensagem = "Erro! Digite os dados corretamente.";
		}
		
		// exibir resultado
		$('#lblResultado').text(mensagem);

	});
	
	$('#btnLimpar').click(function () {
		$('#lblResultado').text("");		
	});

});	