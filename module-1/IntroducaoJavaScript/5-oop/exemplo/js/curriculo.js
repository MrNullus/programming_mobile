$( document ).ready(function() {
  


$('#btnCadastrar').click(function(){
   //fazendo a validação para o campo nome
   let nome   = $('#txtNome').val();
   let cpf     = $('#txtCpf').val();
   let celular = $('#txtCelular').val();


   let valida = new Validacao();

   if(!valida.CampoObrigatorioInformado(nome)){
      $('#lblResultado').text('Nome é de preenchimento obrigatório');
      return;
   }

   if(!valida.CampoObrigatorioInformado(celular)){
      $('#lblResultado').text('Celular é de preenchimento obrigatório');
      return;
   }


   if(valida.ValidaCpf(cpf)){
      $('#lblResultado').text('Curriculo cadastrado com sucesso');
      return;
   }else{
      $('#lblResultado').text('CPF digitado esta incorreto');
      return;
   }

})



});