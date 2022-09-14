function soma(num1, num2) {
  num1 + num2;
  return num1 + num2;
}

console.log(soma(52, 27));
//

function maiorOuNao(num1, num2) {
  let conta = num1 >= num2;
  console.log(`O ${num1} é maior ou igual ao ${num2}? ${conta}`);
}
maiorOuNao(5, 3);

// 

function parOuNao (num1){
    let par1 = num1%2 === 0;
    console.log(`O ${num1} é par? Assim sendo: ${par1}.`)
}

parOuNao(5)

//

function mensagem (string){
    string = `Está será uma mensagem com todas as letras maiúsculas.` 
    console.log(`Versão 1, sem as letras maisculas:`,string, `Tamanho da mensagem em caracteres:`, string.length, ` Versão 2 com as letras maiusculas:`, string.toUpperCase())
}

mensagem()

