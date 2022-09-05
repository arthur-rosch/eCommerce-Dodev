var id = [],
  nome = [],
  price = [],
  evaluation = [],
  productsCart = [],
  amountCart = [],
  loop = true;

while (loop) {
  const menu = prompt(
    "Escolha oque gostaria de fazer: \n1-Cadastrar Produto \n2-Procurar Produto por Id\n3-Procurar por Nome" +
      "\n4-Ordenar Produto por Id \n5-Ordenar Por Valor \n6-Ordenar por Avaliação \n7-Mudar Valor de Um Produto \n8-Deletar Produto \n9-Carrinho \n10-Finalizar Programa"
  );
  if (menu == 1) {
    registerProduct();
  }
  if (menu == 2) {
    var searchID = prompt("Escolha um Id Para Procurar o Produto");
    searchId(searchID);
  }
  if (menu == 3) {
    var searchNAME = prompt(
      "Escolha o Nome do Produto para Retornar o Id do Produto"
    );
    searchName(searchNAME);
  }
  if (menu == 4) {
    orderId();
  }
  if (menu == 5) {
    orderPrice();
  }
  if (menu == 6) {
    orderEvaluation();
  }
  if (menu == 7) {
    var replaceIdValue = prompt(
      "Qual id do produto que gostaria de mudar o valor: "
    );
    var replaceValue = prompt("Qual o valor que gostaria de por:");
    updateValue(replaceIdValue, replaceValue);
  }
  if (menu == 8) {
    var idDelete = prompt("Id do Produto que vc quer Excluir");
    deleteProduct(idDelete);
  }
  if (menu == 9) {
    let exit = true;
    while (exit) {
      const choice = prompt(
        "1-Adicionar Produto \n2-Excluir Produto \n3-Valor Total do Carrinho \n4-Ver Carrinho \n5-Sair do Carrinho"
      );
      if (choice == 1) {
        const product = prompt("Nome do Produto que voce Gostaria:");
        addCart(product);
      }
      if (choice == 2) {
        const productName = prompt(
          "Qual nome do produto que você deseja remover ?"
        );
        removeCart(productName);
      }
      if (choice == 3) {
        alert(`Valor Total: ${totalValue()}`);
      }
      if (choice == 4) {
        cartList();
      }
      if (choice == 5) {
        exit = false;
      }
    }
  }
  if (menu == 10) {
    loop = false;
  }
}
function registerProduct() {
  // 1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
  let escolha = true,
    index = 0;
  while (escolha) {
    id[index] = prompt("Cadastre o Id do seu Produto");
    nome[index] = prompt("Cadastre o Nome do seu Produto");
    price[index] = Number(prompt("Cadastre o Valor do seu Produto"));
    evaluation[index] = prompt("Cadastre a Avaliação do seu Produto");
    index++;
    escolha = prompt("Gostaria de Cadastra mais produtos ? 1-Sim \n2-Nao ");
    if (escolha == 2) {
      escolha = false;
    } else {
      escolha = true;
    }
  }
  return;
}
function searchId(idParameters) {
  //   2.Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
  // informações do produto correspondente;
  // Ex.: Entrada = 3
  for (let A = 0; A < id.length; A++) {
    if (idParameters == id[A]) {
      alert(
        `Id:${id[A]}  Nome:${nome[A]}  Valor:${price[A]}  Avaliação:${evaluation[A]}`
      );
    }
  }
  return;
}
function searchName(nomeParameters) {
  //   3.Buscar um produto pelo nome e retornar o id dele;
  // Ex: Entrada = Mouse Médio
  // Retorno = 2
  for (let A = 0; A < nome.length; A++) {
    if (nomeParameters == nome[A]) {
      alert(`Id:${id[A]}`);
    }
  }
}
function orderId() {
  // 4. Exibir todos os produtos ordenados pelo id;
  var idAuxiliar;
  for (var A = 0; A < id.length; A++) {
    for (var B = 0; B < id.length; B++) {
      if (id[B] < id[B + 1]) {
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
  alert(`Id:${id} \nNome:${nome} \nValor:${price} \nAvaliação:${evaluation}`);
}
function orderPrice() {
  // 5. Exibir os produtos ordenador pelo preço;
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
  alert(`Id:${id} \nNome:${nome} \nValor:${price} \nAvaliação:${evaluation}`);
}
function orderEvaluation() {
  // 6. Exibir os produtos pela ordem de avaliação;

  var priceAuxiliar, idAuxiliar, nomeAuxiliar, evaluationAuxiliar;
  for (var A = 0; A < evaluation.length; A++) {
    for (var B = 0; B < evaluation.length; B++) {
      if (evaluation[B] < evaluation[B + 1]) {
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
  alert(`\nId:${id} \nNome:${nome} \nValor:${price} \mAvaliação:${evaluation}`);
}
function updateValue(idParameters, ValueParameters) {
  //   7.Atualizar o preço de um produto, para isso deve receber o id do produto como
  // parâmetro e o novo valor para atualizar;
  // Ex.: Id = 3, Valor = 200

  for (let A = 0; A < id.length; A++) {
    if (idParameters == id[A]) {
      price[A] = ValueParameters;
      alert(
        `\nId:${id[A]} \nNome:${nome[A]} \nValor:${price[A]} \nAvaliação:${evaluation[A]}`
      );
    }
  }
}
function deleteProduct(idParameters) {
  //   8.Deletar um produto, não esqueça de organizar as informações para que não fique
  // espaços vazios;
  for (let A = 0; A < id.length; A++) {
    if (idParameters == id[A]) {
      id[A] = id[A + 1];
      nome[A] = nome[A + 1];
      price[A] = price[A + 1];
      evaluation[A] = evaluation[A + 1];
      id.length--;
      nome.length--;
      price.length--;
      evaluation.length--;
    }
  }
  alert(`\nId:${id} \nNome:${nome} \nValor:${price} \nAvaliação:${evaluation}`);
}
function addCart(nameParameters) {
  let choiceCart = true,
    base = 0;

  while (choiceCart) {
    if (nameParameters == productsCart[base]) {
      let amount = parseInt(
        prompt(
          "Qual a quantidade de produto que você deseja adicionar ao Carrinho ?"
        )
      );
      amountCart[base] = amount;
      base++;
      choiceCart = false;
    } else {
      productsCart[base] = nameParameters;
      amount = parseInt(
        prompt(
          "Qual a quantidade de produto que você deseja adicionar ao Carrinho ?"
        )
      );
      amountCart[base] = amount;
      base++;
      choiceCart = false;
    }
  }
}
function removeCart(nameParameters) {
  let auxValue = 0;
  for (let A = 0; A < productsCart.length; A++) {
    if (nameParameters == productsCart[A]) {
      let productAmount = prompt(
        "Qual a quantidade que você deseja remover do Carrinho ?"
      );
      if (productAmount >= amountCart[A]) {
        amountCart[A] = auxValue;
        auxValue = amountCart[A + 1];
        productsCart.length--;
        amountCart.length--;
      } else {
        amountCart[A] = amountCart[A] - productAmount;
      }
    }
  }
}
function totalValue() {
  let total = 0;
  for (let A = 0; A < productsCart.length; A++) {
    for (let B = 0; B < nome.length; B++) {
      if (productsCart[A] == nome[B]) {
        total = total + price[B] * amountCart[A];
      }
    }
  }
  return total;
}
function cartList() {
  alert(`Produtos: {${productsCart}}  Valor Total: $${totalValue()}`);
}
