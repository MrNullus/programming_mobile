$(document).ready(function () {
  // #  Funções das Operações  #
  function somar(v1, v2) {
    return (parseFloat(v1) + parseFloat(v2));
  }

  function subtrair(v1, v2) {
    return (parseFloat(v1) - parseFloat(v2));
  }

  function multiplicar(v1, v2) {
    return (parseFloat(v1) * parseFloat(v2));
  }

  function dividir(v1, v2) {
    return (parseFloat(v1) / parseFloat(v2));
  }

  // #  Funções das Áreas  #
  function areaTriangulo(b, h) {
    return dividir(multiplicar(b, h), 2); // b * h / 2
  }

  function areaRetangulo(b, h) {
    return multiplicar(b, h);
  }

  function areaCirculo(r) {
    // PI * (r * r)
    return multiplicar(Math.PI, multiplicar(r, r));
  }


  $('#btnCalcular').click(function () {

    let resultadoOperacao = '';
    let valor1 = $('#txtValor1').val();
    let valor2 = $('#txtValor2').val();

    
    if ($('#rdbSomar').is(':checked')) {

      resultadoOperacao = somar(valor1, valor2);

    } else if ($('#rdbSubtrair').is(':checked')) {

      resultadoOperacao = subtrair(valor1, valor2);

    } else if ($('#rdbAreaTriangulo').is(':checked')) {

      resultadoOperacao = areaTriangulo(valor1, valor2);

    } else if ($('#rdbAreaRetangulo').is(":checked")){

      resultadoOperacao = areaRetangulo(valor1, valor2);

    } else if ($('#rdbAreaCirculo').is(":checked")){

      resultadoOperacao = areaCirculo(valor1);

    }


    $('#lblMensagem').text(resultadoOperacao);

  });

  $('#btnLimpar').click(function () {
    // - para o botão chamar o procedimento
    $('#txtValor1').val("");
    $('#txtValor2').val("");
    $('#lblMensagem').text("");
 
    /*
      -- Outra forma, irá limpar todos os radio buttons --
    $('input[type=radio]').prop('checked', false);
    */

    $('#rdbSomar').prop('checked', false);
    $('#rdbSubtrair').prop('checked', false);
    $('#rdbmMultiplicar').prop('checked', false);
    $('#rdbDividir').prop('checked', false);
    $('#rdbAreaTriangulo').prop('checked', false);
    $('#rdbAreaRetangulo').prop('checked', false);
    $('#rdbAreaCirculo').prop('checked', false);
      

  });

});