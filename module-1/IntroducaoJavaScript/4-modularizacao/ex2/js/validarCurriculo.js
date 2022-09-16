$(document).ready(function () {

  function pegarValDoCampo(elment) {
    return $(elment).val();
  }



  $('#btnCadastrar').click(function (){
   
    // # Pegar valores
    let txtNome = pegarValDoCampo('#txtNome');
    let txtTelefone = pegarValDoCampo('#txtTelefone');
    let txtCpf = pegarValDoCampo('#txtCpf');
    let txtEndereco = pegarValDoCampo('#txtEndereco');
    let txtareaExperiencia = pegarValDoCampo('#txtareaExperiencia');

    // if (isNaN(txtCpf)) {

    // }
    // # Dados Iniciais
    let novePrimeirosDigitos = [];
    let doisUltimosDigitos = [];

    for (let i = 0; i <= txtCpf.length; i++) {
      if (i > 8) {
        doisUltimosDigitos.push(txtCpf[i]);
      } else {
        novePrimeirosDigitos.push(txtCpf[i]);
      }
    }
    doisUltimosDigitos.pop();


    let acc = 0;
    let mult = 0;
    let d = 0;

    for (let i = 10; i >= novePrimeirosDigitos.length; i--) {
      let digito = parseInt(novePrimeirosDigitos[d]);
      mult =  digito * i;
      acc += mult;
      console.log(i);
    }

    console.log(acc);
  });

}); 