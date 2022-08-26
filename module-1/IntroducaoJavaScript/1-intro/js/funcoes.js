$(document).ready(function () {

    $('#btnSomar').click(function () {
        let num1 = $('#txtNum1').val();
        let num2 = $('#txtNum2').val();
        let resultado = parseFloat(num1) + parseFloat(num2);

        $('#lblResultado').text(resultado);

    });

    $('#btnSubtrair').click(function () {
        let numInput1 = parseFloat($("#txtNum1").val());
        let numInput2 = parseFloat($("#txtNum2").val());
        let result = numInput2 - numInput1;

        $("#lblResultado").text(result);

    });

    $('#btnMult').click(function () {
        let numInput1 = parseFloat($("#txtNum1").val());
        let numInput2 = parseFloat($("#txtNum2").val());
        let result = numInput1 * numInput2;

        $("#lblResultado").text(result);

    });

    $('#btnDivi').click(function () {
        let numInput1 = parseFloat($("#txtNum1").val());
        let numInput2 = parseFloat($("#txtNum2").val());
        let result = numInput2 / numInput1;

        $("#lblResultado").text(result);

    });

    $('#btnMod').click(function () {
        let numInput1 = parseFloat($("#txtNum1").val());
        let numInput2 = parseFloat($("#txtNum2").val());
        let result = numInput1 % numInput2;

        $("#lblResultado").text(result);

    });

});