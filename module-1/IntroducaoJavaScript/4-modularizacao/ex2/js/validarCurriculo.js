$(document).ready(function () {

  function pegarValDoCampo(elment) {
    return $(elment).val();
  }
  function obterDigito(res) {
    if (res < 2) {
      return  0;
    } else if (res > 2) {
      return (res - 11);
    }
  }

  function calculoDigito10(digitos) {
    let digito10 = 0;
    let soma = 0;
    let mult = 0;
    let d = 0;

    for (let i = 10; i >= 2; i--) {
      let digito = parseInt(digitos[d]);

      mult = digito * i;
      soma += mult;
      d++;
    }  

    resto = soma % 11;

    digito10 = Math.abs( obterDigito(resto) );

    return (digito10);
  }
  function calculoDigito11(digitos, digi10) {
    let mult = 0, soma = 0;
    let digito11 = 0;

    digitos.push(digi10);

    for (let i = 11, d = 0; i >= 2; i++, d++) {
      let digito = parseInt(digitos[d]);

      mult = digito * i;
      soma += mult;
    }

    resto = soma;

    digito11 = Math.abs( obterDigito(resto) );
    
    return (digito11);
  }



  $('#btnCadastrar').click(function (){
   
    // # Pegar valores
    let txtNome = pegarValDoCampo('#txtNome');
    let txtTelefone = pegarValDoCampo('#txtTelefone');
    let txtCpf = pegarValDoCampo('#txtCpf');
    let txtEndereco = pegarValDoCampo('#txtEndereco');
    let txtareaExperiencia = pegarValDoCampo('#txtareaExperiencia');


    // # Dados Iniciais
    let noveDigitos = [];
    let doisUltimosDigitos = [];
    let digito10 = 0;
    

    for (let i = 0; i <= txtCpf.length - 1; i++) {
      if (i > 8) {
        doisUltimosDigitos.push(txtCpf[i]);
      } else {
        noveDigitos.push(txtCpf[i]);
      }
    }
 
    digito10 = calculoDigito10(noveDigitos);
    console.log(digito10);

    digito11 = calculoDigito11(noveDigitos, digito10);
    console.log("helloqwwwwe");
  });

}); 