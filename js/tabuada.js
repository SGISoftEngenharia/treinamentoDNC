
function tabuada(){

    
    var  num = window.document.getElementById('num');
    var end = window.document.getElementById('end');
    var result = '';
    var n = Number(num.value);
    var e = Number(end.value);
    var x = 0;
    result = n * e  ;
    var res = window.document.getElementById('resultado');

   

    if(num.value == 0 || end.value == 0 ){
        res.innerHTML = `Preencha os campos acima para calcular!!!`;
        res.style.color = 'red';

    } else{
        res.innerHTML = `A tabuada do ${n} é <br>`;
    do{
        result = n * x;
        res.innerHTML += `${n} x ${x} = ${result} <br>`
        x++;

    }while(x <= e  )
    
   
   

    }
}

