var id = [],
  nome = [],
  price = [],
  evaluation = [],
  escolha = 1,
  escolha2 = true,
  index = 0;

registerProduct();
console.log(id, nome, price, evaluation);

function registerProduct() {
  // 1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
  while (escolha == 1) {
    id[index] = prompt("Cadastre o Id do seu Produto");
    nome[index] = prompt("Cadastre o Nome do seu Produto");
    price[index] = prompt("Cadastre o Valor do seu Produto");
    evaluation[index] = prompt("Cadastre a Avaliação do seu Produto");
    index++;
    escolha = prompt("Gostaria de Cadastra mais produtos ? 1-Sim \n2-Nao ");
    return;
  }
}
function searchId() {
  var searchId = prompt("Escolha um Id Para Procurar o Produto");
  for (let A = 0; A < id.length; A++) {
    if (searchId == id[A]) {
      console.log(id[A], nome[A], price[A], evaluation[A]);
    }
  }
}
