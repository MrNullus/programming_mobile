class Validacao {
    //função para validação de campos obrigatorios
    CampoObrigatorioInformado(campo){
        if(campo == ''){
            return false;
        }
        return true;
    }

    //função que verificar o comprimento do campo
    TamanhoCampoInformado(campo, tamanho){
        if(campo.length == tamanho){
            return true;
        }
        return false;
    }

    //função para validação de CPF
    ValidaCpf(cpf){
        if(!this.CampoObrigatorioInformado(cpf)){
            return false;
        }

        if(!this.TamanhoCampoInformado(cpf, 11)){
            return false
        }

        if(isNaN(cpf)){
            return false;
        }

        if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' || cpf == '44444444444' 
        || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' || cpf == '88888888888' || cpf == '99999999999'){
            return false;
        }

        let cpfDigitos = [];
        let somatorio = 0 , restoDivisao = 0, contadorDecrescente = 10;

        for(let contador = 0; contador <= 10; contador++){
            cpfDigitos.push(cpf.substring(contador , contador + 1));
        }

        for(let contador = 0; contador <= 8; contador++){
            somatorio += parseInt(cpfDigitos[contador]) * contadorDecrescente;
            contadorDecrescente--;
        }

        restoDivisao = somatorio % 11;

        if((restoDivisao < 2 && parseInt(cpfDigitos[9]) == 0) 
        || (11 - restoDivisao == parseInt(cpfDigitos[9]))){
            restoDivisao = 0;
            contadorDecrescente = 11;
            somatorio = 0;

            for(let contador = 0; contador <= 9; contador++){
                somatorio += parseInt(cpfDigitos[contador]) * contadorDecrescente;
                contadorDecrescente--;
            }

            restoDivisao = somatorio % 11;

            if((restoDivisao < 2 && parseInt(cpfDigitos[10]) == 0) 
            || (11 - restoDivisao == parseInt(cpfDigitos[10]))){
                return true;
            }else{
                return false;
            }


        }else{
            return false;
        }


    }
}