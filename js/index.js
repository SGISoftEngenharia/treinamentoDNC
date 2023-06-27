
// para card não ser renderizado

window.document.getElementById('card').style.setProperty('display','none','important');


function procurar(){

    //  volta a renderizar o card
    window.document.getElementById('card').style.setProperty('display','block','important');

    // pegar o valor do input
    //https://restcountries.com/v3.1/name/{name}?fullText=true

    let pais = window.document.getElementById('pais').value;
    let urlFinal = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    fetch(urlFinal)//carrega todos os dados da url da API
        .then(function(response){
            return response.json()
        })
        .then(function(data){

           
           

            let bandeira = window.document.getElementById('bandeira');
            let nomePais = window.document.getElementById('nomePais');
            let capital = window.document.getElementById('capital');
            let cont = window.document.getElementById('cont');
            let pop = window.document.getElementById('pop');

            bandeira.src = data[0].flags.svg
            nomePais.innerText = pais;
            capital.innerHTML = data[0].capital[0];
            cont.innerHTML = data[0].continents[0];
            pop.innerHTML = data[0].population;


        })

}