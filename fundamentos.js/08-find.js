/*
    O método de vetores find() encontra o Primeiro elemento que corresponda ao retorno de uma função passada
    como parâmento.

*/
const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

//Encontrando o primeiro número negativo no vetor de números
console.log('Primeiro número negativo: ',
  numeros.find(n=>n<0)

)
//encontrando o primeiro número múltiplo de 5
console.log('Primeiro múltiplo de 5:',
    numeros.find(x => x % 5 === 0)
)
//encontra o primeiro número maior q 20
console.log('Primeiro número maior que 20:',
    numeros.find(i => i > 20)
)
//encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta começa "m":',
    frutas.find(f => f.charAt(0) === "m")


)