

function buscaCEP(){

    var msg = document.getElementById('msg');
   
    let cep = document.getElementById('cep').value;
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`;


    fetch(urlAPI)//carrega todos os dados da url da API

        .then( function(response){

        if(!response.ok){
            msg.innerHTML = `Erro na Resposta do HTTP! Status: ${response.status} `;
            throw new Error(`Erro na Resposta do HTTP! Status: ${response.status}`);
          
            
        }

        return response.json();

    })
   .then( function(dadosAPI){
    
// escrever os dados da API no html
    let rua = document.getElementById('rua').value = dadosAPI.logradouro;
    let bairro = document.getElementById('bairro').value = dadosAPI.bairro;
    let municipio = document.getElementById('municipio').value = dadosAPI.localidade;
    let estado = document.getElementById('estado').value = dadosAPI.uf;



   
    


   })
}