$(document).ready(function() {

    // Setar botão btnVerificar
    $('#btnVerificar').click(function () {

        // dados iniciais
        let valoresNaoInteiros, inicioMenorOuIgual, rdbCheckado;
        let pares = ''; 
        let impares = '';

        // Pegar valores 
        let lblResultado = $('#lblResultado');
        let lblErro = $('#lblErro');
        let txtInicio = parseInt($('#txtInicio').val());
        let txtFim = parseInt($('#txtFim').val());
        let rdbPar = $('#rdbPar').is(':checked');
        let rdbImpar = $('#rdbImpar').is(':checked');


        // verificar se é um numero
        if (isNaN(txtInicio) || isNaN(txtFim)) {
            valoresNaoInteiros = true;
            lblErro.text("Insira valores inteiros!");

        } else {
            valoresNaoInteiros = false;
        }
        // verificar se inicio é maior ou igual ao fim
        if (txtInicio <= txtFim) {
            inicioMenorOuIgual = true;
        } else {
            lblErro.text("O valor de inicio deve ser menor ou igual a fim!");
            inicioMenorOuIgual = false;
        }
        // verificar se algum radio button está checkado
        if (rdbPar || rdbImpar) {
            rdbCheckado = true;
        } else {
            lblErro.text("Você deve escolher se vai ser 'par' ou 'impar'");
            rdbCheckado = false;
        }


        if (!valoresNaoInteiros && inicioMenorOuIgual && rdbCheckado) {

            if (rdbPar) {
                for (let i = txtInicio; i <= txtFim; i++) {
                    if (i % 2 == 0) {
                        pares += " [ " + i + " ] ";
                    }
                }

                lblResultado.text(pares);
            }

            if (rdbImpar) {
                for (let i = txtInicio; i <= txtFim; i++) {
                    if (i % 2 > 0) {
                        impares += " [ " + i + " ] ";
                    }
                }

                lblResultado.text(impares);
            }
        }

    });


    $('#btnLimpar').click(function () {
        txtFim.text("");
        txtInicio.text("");
    });

});
