$( document ).ready(function() {
    
    $('#btnCalcular').click(function(){
        let resultado;
        let tabuada = "";
        let txtNumero = $('#txtNumero').val();

        for (let i = 1; i <= 10; i++) {
            resultado = i * txtNumero;
            tabuada += resultado + " ";
        }

        $('#lblResultado').text(tabuada);
    });

});






