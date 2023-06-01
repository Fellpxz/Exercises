//  Escreva uma função que receba um número e retorne se ele é par ou ímpar.

function verificaParImpar(num) {
    if (num % 2 === 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }

console.log(verificaParImpar(2))

/*

No JavaScript, o operador = é usado para atribuir um valor a uma variável. Por exemplo:


let x = 5;
O operador == é usado para verificar se dois valores são iguais, fazendo uma conversão implícita de tipos se necessário. Por exemplo:


console.log(5 == "5"); // Saída: true
Nesse caso, o valor 5 é convertido implicitamente para uma string "5", e a comparação retorna true.

Já o operador === também verifica se dois valores são iguais, mas sem fazer conversão de tipos. Ou seja, ambos os valores devem ser do mesmo tipo e ter o mesmo valor. Por exemplo:


console.log(5 === "5"); // Saída: false
Nesse caso, como um valor é uma string e o outro é um número, a comparação retorna false.

*/ 