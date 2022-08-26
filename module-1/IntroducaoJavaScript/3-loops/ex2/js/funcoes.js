$( document ).ready(function() {
    
    $('#btnCalcular').click(function(){
        let fat = 1;
        let txtFatorial = parseInt($('#txtFatorial').val());
        let mensagem = txtFatorial + '! = ';

        //12
        for (let i = txtFatorial; i >= 1; i--) {
            fat *= i;
            if (i != 1) {
                mensagem += i + " x ";
            } else { 
                mensagem += i + " = " + fat;
            }
        }
        $('#lblResultado').text(mensagem);
    });

});






