
$(document).ready(function () {

    $("#btnVerificar").click(function () {
        //-> setar dados iniciais
        let maiorIdade = 0;
        let menorIdade = 0;
        let nomesMaiorIdade = "";
        let nomesMenorIdade = "";

        //-> pegar valores
        let txtPedro = parseInt($('#txt1').val());
        let txtPaulo = parseInt($('#txt2').val());
        let txtJose = parseInt($('#txt3').val());
        let txtFrancisco = parseInt($('#txt4').val());
        let txtRoberto = parseInt($('#txt5').val());

        
        //-> verificar entrada do usuario
        if (
            isNaN(txtPedro) || isNaN(txtPaulo) ||
            isNaN(txtJose)  || isNaN(txtFrancisco) ||
            isNaN(txtRoberto)
        ) {

            $("#lblError").text("Erro: dados incorretos!");

        } else {

            $("#lblError").text("");

            //-> verificação Pedro
            if (
                txtPedro  >=  txtPaulo && 
                txtPedro  >=  txtJose  &&
                txtPedro  >=  txtFrancisco &&
                txtPedro  >=  txtRoberto
            ) {

                maiorIdade = txtPedro;    
                nomesMaiorIdade += " Pedro - ";

            } else if (
                txtPedro  <=  txtPaulo && 
                txtPedro  <=  txtJose  &&
                txtPedro  <=  txtFrancisco  &&
                txtPedro  <=  txtRoberto
            ) {

                menorIdade = txtPedro;
                nomesMenorIdade += " Pedro  - ";

            }
            
            //-> verificação Paulo
            if (
                txtPaulo  >=  txtPedro && 
                txtPaulo  >=  txtJose  &&
                txtPaulo  >=  txtFrancisco &&
                txtPaulo  >=  txtRoberto
            ) {

                maiorIdade += txtPaulo;    
                nomesMaiorIdade = " Paulo - ";

            } else if (
                txtPaulo  <=  txtPedro && 
                txtPaulo  <=  txtJose  &&
                txtPaulo  <=  txtFrancisco && 
                txtPaulo  <=  txtRoberto
            ) {

                menorIdade = txtPaulo;
                nomesMenorIdade += " Paulo - ";

            }

            //-> verificação Jose
            if (
                txtJose  >=  txtPedro && 
                txtJose  >=  txtPaulo  && 
                txtJose  >=  txtFrancisco && 
                txtJose  >=  txtRoberto  
            ) {

                maiorIdade = txtJose;    
                nomesMaiorIdade += " José - ";

            } else if (
                txtJose  <=  txtPedro && 
                txtJose  <=  txtPaulo && 
                txtJose  <=  txtFrancisco &&
                txtJose  <=  txtRoberto
            ) {

                menorIdade = txtJose;
                nomesMenorIdade += " José - ";

            }

            //-> verificação Francisco
            if (
                txtFrancisco  >=  txtPedro && 
                txtFrancisco  >=  txtPaulo && 
                txtFrancisco  >=  txtJose  &&
                txtFrancisco  >=  txtRoberto
            ) {

                maiorIdade = txtFrancisco;
                nomesMaiorIdade += " Francisco - ";

            } else if (
                txtFrancisco  <=  txtPedro && 
                txtFrancisco  <=  txtPaulo && 
                txtFrancisco  <=  txtJose  &&
                txtFrancisco  <=  txtRoberto
            ) {

                menorIdade = txtFrancisco;
                nomesMenorIdade += " Francisco - ";

            }

            //-> verificação Roberto
            if (
                txtRoberto  >=  txtPedro && 
                txtRoberto  >=  txtPaulo && 
                txtRoberto  >=  txtJose  &&
                txtRoberto  >=  txtFrancisco 
            ) {

                maiorIdade = txtRoberto;
                nomesMaiorIdade += " Roberto - ";
            } else if (
                txtRoberto  <=  txtPedro && 
                txtRoberto  <=  txtPaulo && 
                txtRoberto  <=  txtJose  &&
                txtRoberto  <=  txtFrancisco
            ) {

                menorIdade = txtRoberto;
                nomesMenorIdade += " Roberto - ";

            }

            //-> exibição dos resultados
            $("#lblMaiorIdade").text(
                nomesMaiorIdade + "> tem " + maiorIdade + " anos de idade "
            );  

            if (menorIdade == 0) {
                $("#lblMenorIdade").text(
                    nomesMaiorIdade + "> tem " + maiorIdade + " anos de idade "  
                );    
            } else {
                $("#lblMenorIdade").text(
                    nomesMenorIdade + "> tem " + menorIdade + " anos de idade "
                );
            }
            

        }  
        
    });


    $("#btnReset").click(function () {

        $("#lblMaiorIdade").text("");  
        $("#lblMenorIdade").text("");        

    });

});