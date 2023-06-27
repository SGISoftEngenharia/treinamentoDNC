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

       this.listaProdutos();
       this. cancelar();
    
      
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

            msg.innerHTML = `Digite o preço do Produto!!! `;
            msg.style.color = 'red';
            msg.style.fontSize = '18px'
            msg.style.fontWeight = 'bold'           
        }

        return true;

     }

     // criar um método para salvar os produtos

     salvar(produto){

      this.arrayProdutos.push(produto);
      this.id++;
   }

     // criar um método para listar os produtos

     listaProdutos(){

        let corpoTabela = window.document.getElementById('tbody');
        corpoTabela.innerText = '';

        // varrer o array de produtos

        for(let i = 0; i < this.arrayProdutos.length; i++){

           let tr = corpoTabela.insertRow();// inseri uma linha na tabela

           let td_id = tr.insertCell();// insere uma colula 
           let td_NomeProduto = tr.insertCell();
           let td_precoProduto = tr.insertCell();
           let td_DeletarProduto = tr.insertCell();

           // escrver os dados nas  colunas

        td_id.innerText = this.arrayProdutos[i].id;  // entra dentro d array e pega apenas o id.
        td_NomeProduto.innerText = this.arrayProdutos[i].nomeProduto;
        td_precoProduto.innerText = this.arrayProdutos[i].precoProduto;
        let imgTrash = document.createElement('img');// cria um elemento no html
        imgTrash.src = 'imagens/trash.png';// caminho da imagem
        imgTrash.setAttribute("onclick","produto.deletar(" + this.arrayProdutos[i].id+ ")");
        td_DeletarProduto.appendChild(imgTrash);// imprimi a imagem na coluna





        }

     }

     cancelar(){
      document.getElementById('nProduto').value = '';
      document.getElementById('pProduto').value ='';
     }

     deletar(id ){   
      let msg = window.document.getElementById('avisoTabela');
      let corpoTabela = window.document.getElementById('tbody');

for(let i = 0; i < this.arrayProdutos.length; i++){
   if(this.arrayProdutos[i].id == id){
      this.arrayProdutos.splice(i,1);
      corpoTabela.deleteRow(i);
   }

}

      msg.innerHTML = `Dados Deletados! Id: ${id}`;
      msg.style.color = 'red';
      msg.style.fontSize = '18px'
      msg.style.fontWeight = 'bold'           
      
     }

}

var produto = new Produto();