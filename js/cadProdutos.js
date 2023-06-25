// criar uma class produto com os métodos


class Produto{

    constructor(){
        this.id = 1;

        // criar um array para salvar os produtos

       this.arrayProdutos = [];

    }

    // criar um método para adicionar produto

    adicionar(){

        // o método "lerDados" armazena o objeto produto dentro da variável produto.
       let produto = this.lerDados()
      
       if(this.validarProduto(produto) == true){

        this.salvar(produto);

       }

       console.log(this.arrayProdutos);
      
    }

    // criar um método lerDados

    lerDados(){
        // criar um objeto vazio

        let produto = {};
        produto.id = this.id;
        // Lê os dados vindo dos inputs 
        produto.nomeProduto = window.document.getElementById('nProduto').value;
        produto.precoProduto = window.document.getElementById('pProduto').value; 

        return produto;

    }

     // validar os dados
     validarProduto(produto){

        let msg = window.document.getElementById('aviso');
       
// se o nome do produto estiver vazio imprimi um aviso
        if(produto.nomeProduto == ''){

            msg.innerHTML = `Digite o nome do Produto!!!`;
            msg.style.color = 'red';
            msg.style.fontSize = '18px'
            msg.style.fontWeight = 'bold'           
        }


        if(produto.precoProduto == ''){

            msg.innerHTML = `Digite o preço do Produto!!!`;
            msg.style.color = 'red';
            msg.style.fontSize = '18px'
            msg.style.fontWeight = 'bold'           
        }

        return true;

     }

     // criar um método para salvar os produtos

     salvar(produto){
        // empurrar as informações de produtos para dentro do array

        this.arrayProdutos.push(produto);
        this.id++;
     }
}

var produto = new Produto();