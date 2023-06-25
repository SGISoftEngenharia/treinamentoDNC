
// ler os elementos da DOM

const dia = window.document.getElementById('dia');
const horas = window.document.getElementById('hora');
const minutos = window.document.getElementById('minuto');
const segundos = window.document.getElementById('segundo');

// estancia da data

const dataLancamento = "17 oct 2023"


function countDown(){

   const dataLanc = new Date(dataLancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje)/1000;


    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalhoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalsegundos = Math.floor(segTotal) % 60 ;

    // enviar os dados das variáveis para a DOM

    dia.innerHTML = formataTempo( finalDias);
    horas.innerHTML =formataTempo( finalhoras);
    minutos.innerHTML =formataTempo( finalMinutos);
    segundos.innerHTML =formataTempo( finalsegundos);

    // acrescentar um zero na frente dos tempos

    function formataTempo(tempo){

        // retorno com comparação
        return tempo <10? `0${tempo}`: tempo;

    }

}

countDown();

setInterval(countDown,1000);