
function statusLampada(){

    return lamp.src.indexOf('lampada_Quebrada') > - 1;
}


// lendo o objeto da DOM e gravando em uma variável.

var lamp = window.document.getElementById('led')

function ligaLampada(){

    if(!statusLampada()){
   lamp.src = 'imagens/lampada_On.png';
    
    }
}

// monitora o evento na variável  "lamp" nescaso um evento de click e executa uma function "lampQuebrada"
lamp.addEventListener('click', lampQuebrada);

function desligaLampada(){
    if(!statusLampada()){
    lamp.src = 'imagens/lampada_Off.png';
     
    }
 }
 function lampQuebrada(){
    lamp.src = 'imagens/lampada_Quebrada.png';
 }
