$(document).ready(function () {
	
	$('#btnCalcularMedia').click(function () {
		
		// pegar dados 
		let nota1 = parseFloat($('#txtNota1').val());
		let nota2 = parseFloat($('#txtNota2').val());
		let nota3 = parseFloat($('#txtNota3').val());
	
		if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

			$('#lblResultado').text('Houve um erro! Informe as notas corretamente');
			
		} else {
			
			// calcular media
			let media = (nota1 + nota2 + nota3) / 3;
			
			// exibir o resultado
			let mensagem = 
				'Média das notas: ' + media.toFixed(1);
				
			$('#lblResultado').text(mensagem);
			
		}

	});
	
});