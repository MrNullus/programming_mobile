/*
* Classe para Validação 
*/ 
class Validacao {

    campoObrigatorioPreenchido( campo ) {
        if ( campo == '' ) {
            return false;
        }

        return true;
    }

    isCampoNumerico( campo ) {
        if ( isNaN(campo) ) {
            return false;
        }
        
        return true;
    }

}
