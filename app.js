var id = [],
  nome = [],
  price = [],
  evaluation = [],
  escolha = 1,
  index = 0;

while (escolha == 1) {
  registerProduct();
  console.log(id, nome, price, evaluation);
}
function registerProduct() {
  id[index] = prompt("Cadastre o Id do seu Produto");
  nome[index] = prompt("Cadastre o Nome do seu Produto");
  price[index] = prompt("Cadastre o Valor do seu Produto");
  evaluation[index] = prompt("Cadastre a Avaliação do seu Produto");
  index++;
  escolha = prompt("Gostaria de Cadastra mais produtos ? 1-Sim \n2-Nao ");
  return;
}
