var id = [],
  nome = [],
  price = [],
  evaluation = [],
  escolha = true,
  index = 0;

registerProduct();
ordensPrice();
function registerProduct() {
  // 1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
  while (escolha) {
    id[index] = prompt("Cadastre o Id do seu Produto");
    nome[index] = prompt("Cadastre o Nome do seu Produto");
    price[index] = prompt("Cadastre o Valor do seu Produto");
    evaluation[index] = prompt("Cadastre a Avaliação do seu Produto");
    index++;
    escolha = prompt("Gostaria de Cadastra mais produtos ? 1-Sim \n2-Nao ");
    if (escolha == 2) {
      escolha = false;
    } else {
      escolha = true;
    }
  }
}
function searchId() {
  var searchId = prompt("Escolha um Id Para Procurar o Produto");
  for (let A = 0; A < id.length; A++) {
    if (searchId == id[A]) {
      console.log(
        `Id:${id[A]}  Nome:${nome[A]}  Valor:${price[A]}  Avaliação:${evaluation[A]}`
      );
    }
  }
  return;
}
function searchName() {
  var searchName = prompt(
    "Escolha o Nome do Produto para Retornar o Id do Produto"
  );
  for (let A = 0; A < nome.length; A++) {
    if (searchName == nome[A]) {
      console.log(`Esse e o Id:${id[A]}`);
    }
  }
}
function ordensId() {
  var idAuxiliar;
  for (var A = 0; A < id.length; A++) {
    for (var B = 0; B < id.length; B++) {
      if (id[B] < id[B + 1]) {
        idAuxiliar = id[B];
        id[B] = id[B + 1];
        id[B + 1] = idAuxiliar;
      }
    }
  }
  console.log(id);
}
function ordensPrice() {
  var priceAuxiliar, idAuxiliar, nomeAuxiliar, evaluationAuxiliar;
  for (var A = 0; A < price.length; A++) {
    for (var B = 0; B < price.length; B++) {
      if (price[B] < price[B + 1]) {
        idAuxiliar = id[B];
        id[B] = id[B + 1];
        id[B + 1] = idAuxiliar;

        nomeAuxiliar = nome[B];
        nome[B] = nome[B + 1];
        nome[B + 1] = nomeAuxiliar;

        priceAuxiliar = price[B];
        price[B] = price[B + 1];
        price[B + 1] = priceAuxiliar;

        evaluationAuxiliar = evaluation[B];
        evaluation[B] = evaluation[B + 1];
        evaluation[B + 1] = evaluationAuxiliar;
      }
    }
  }
  console.log(`Id:${id} Nome:${nome} Valor:${price} Avaliação:${evaluation}`);
}
