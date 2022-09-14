// funções
function imprimirNome(nome) {
  console.log(`O nome escolhido foi ${nome}`);
}

imprimirNome(prompt("Insira um nome"));

//

function tabuada(do6) {
  for (let num = 1; num <= 10; num++) {
    console.log(`${do6} x ${num} = ${do6 * num}`);
  }
}
console.log("A seguir a tabuada do 6:");
tabuada(6);

// versões em arrow function

const imprimirNome = (nome) => {
  console.log(`O nome escolhido foi ${nome}`);
};
imprimirNome(prompt("Insiria seu nome"));

// //

const tabuad = (for6) => {
  for (let val = 0; val <= 10; val++) {
    console.log(`${for6} x ${val} = ${val * for6}`);
  }
};
console.log("Tabuada do 6 feita no VS em Arrow Function:")
tabuad(6)
