
var nomes = [];


function adicionar() {

  var coleta = document.getElementById("nome").value;
  var nomeDig = document.createElement('li');

  nomes.push(coleta);                // Para Adicionar na lista nomes
  nomeDig.innerHTML = coleta;        // Para Exibir os nomes da lista
  lista.appendChild(nomeDig);

}

// Para usar em tabela

// function addNome() {
//   var nome = document.getElementById('adicionar').value;
//   document.getElementById('tbody').innerHTML = document.getElementById('tbody').innerHTML + '<tr><td>' + nome + '<tr/><td/>';
// }

