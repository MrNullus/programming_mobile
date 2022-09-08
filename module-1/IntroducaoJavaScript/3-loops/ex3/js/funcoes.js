$(document).ready(function() {

  /*
  * Setar botão btnVerificar
  */
  $('#btnVerificar').click(function () {

    /*
     * Dados iniciais
    */
    let valoresNaoInteiros, inicioMenorOuIgual, algumRdbCheckado;

    let pares = ''; 
    let impares = '';


    /*
     *> Pegar valores 
    */
    let lblResultado = $('#lblResultado');

    let txtInicio = parseInt($('#txtInicio').val());
    let txtFim = parseInt($('#txtFim').val());

    let rdbPar = $('#rdbPar');
    let rdbImpar = $('#rdbImpar');


    /*
     * Verificações dos Requisitos
    */

    // -> Verificar se é um numero
    valoresNaoInteiros = isNaN(txtInicio) || isNaN(txtFim);
    if (valoresNaoInteiros) {
      valoresNaoInteiros = true;
      alert("Insira valores inteiros!");
    } else {
        valoresNaoInteiros = false;
    }

    // -> Verificar se inicio é maior ou igual ao fim
    inicioMenorOuIgual = txtInicio <= txtFim;
    if (inicioMenorOuIgual) {
      inicioMenorOuIgual = true;    
    } else {
      inicioMenorOuIgual = false;
      alert("O valor de inicio deve ser menor ou igual a fim!");
    }

    // -> Verificar se algum radio button está checkado
    algumRdbCheckado = rdbPar.is(':checked') || rdbImpar.is(':checked')
    if (algumRdbCheckado) {
      algumRdbCheckado = true;
    } else {
      algumRdbCheckado = false;
      alert("Você deve escolher se vai ser   'par' ou 'impar'");
    }


    /*
     * Autenticar se todos os requisitos são favoraveis
    */
    if (
      !valoresNaoInteiros && 
      inicioMenorOuIgual  && 
      algumRdbCheckado
    ) {

      if (rdbPar.is(':checked')) {
        for (let i = txtInicio; i <= txtFim; i++) {
          if (i % 2 == 0) {
            pares += " [ " + i + " ] ";
          }
        }

        lblResultado.text(pares);
      }

      if (rdbImpar.is(':checked')) {
        for (let i = txtInicio; i <= txtFim; i++) {
          if (i % 2 > 0) {
            impares += " [ " + i + " ] ";
          }
        }

        lblResultado.text(impares);
      }
    }

  });


  /*
  * Setar botão btnLimpar
  */  
  $('#btnLimpar').click(function () {

    $('#txtInicio').val(" ");
    $('#txtFim').val(" ");

    $('#lblResultado').text(" ");

    $('#rdbPar').prop('checked', false);
    $('#rdbImpar').prop('checked', false);

  });

});
