/*

Escreva uma função que receba um array de números e retorne a soma de todos eles.

*/

function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    return soma;
  }

  
const numeros = [1, 2, 3, 4, 5];
const resultado = somarNumeros(numeros);
console.log(resultado);

/* 

Nesse exemplo, a função somarNumeros recebe um array numeros como parâmetro e, em seguida, utiliza um loop for para iterar sobre cada elemento do array e somá-los à variável soma. Ao final do loop, a função retorna o valor de soma.

Essa é uma forma mais iniciante de realizar a operação, mas é importante lembrar que a função reduce é uma ferramenta muito poderosa do JavaScript e é útil em muitas situações, especialmente quando se trata de manipulação de arrays.

*/

function somarNumeros(numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
  }
  
 
const num = [1, 2, 3, 4, 5];
const res = somarNumeros(num);
console.log(res); 

/* 

Você pode fazer isso usando o método reduce() do JavaScript. A função reduce() percorre cada elemento de um array e acumula um valor com base em uma função de redução.

Nesse exemplo, a função somarNumeros() recebe um array de números como parâmetro. Em seguida, o método reduce() é chamado no array numeros, e a função de redução soma cada elemento do array com o total acumulado até então. O segundo argumento para o método reduce() é o valor inicial do total, que neste caso é zero. Finalmente, a função retorna o total acumulado como a soma dos números no array.

O método reduce() é usado para reduzir os elementos de um array a um único valor, usando uma função de callback.

A função de callback recebe dois argumentos: o primeiro é o valor acumulado (também chamado de "total" ou "accumulator"), que é o resultado da operação anterior ou o valor inicial definido pelo segundo argumento do reduce(). O segundo argumento é o valor atual do elemento sendo iterado no array.

No caso do exemplo que você mencionou, a função de callback é uma função anônima que recebe dois argumentos: total e numero. O valor inicial do acumulador é definido como zero.

A cada iteração do reduce(), o valor de total é somado com o valor atual do elemento numero no array. A cada iteração, o valor resultante da soma é atribuído ao acumulador total. No final da iteração, o método reduce() retorna o valor final do acumulador total, que representa a soma de todos os elementos no array.

Resumindo, essa linha de código está somando todos os números no array usando o método reduce(). O segundo argumento do reduce() é o valor inicial do acumulador, que é zero. A função de callback recebe dois argumentos, total (acumulador) e numero (valor atual), e retorna a soma dos dois valores.

*/