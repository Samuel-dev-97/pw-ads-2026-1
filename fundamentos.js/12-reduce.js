/*
    reduce() é um método de vetores que reduz o vetor a um único valor.
    Para isso, aplica uma função a cada elemento do vetor, a qual
    efetua uma operação sobre o elemento da vez e acumula
    o valor em um parâmetro a cada resultado. O resultado é o valor final do  
    acumulador 
*/

const numeros = [13, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracujá']

/* 
    Usando reduce() para somar os elementos do vetor numeros 
    A função de callback do reduce(), em sua forma mais simples, leva 
    dois parâmetros:

    1º ~> é o acumulador(normalmente nomeado como "ACUM" OU "ACC"),
    que armazena o resultado acumulado das operações efetuadas sobre os 
    elementos anteriores.

    2º ~> corresponde ao elemento ("EL" ou "E") que está sendo processado no momento.

*/

const soma = numeros.reduce((acum, el) => acum + el)
console.log('SOMA DOS NÚMEROS:', soma)

//De forma similar, a multiplicação dos númmeros do vetor
const produto = numeros.reduce((acc, e) => acc* e)
console.log('Produto dos números:', produto)

console.log('-'.repeat(80) )

//Usando reduce() para fazer a concatenação das frutas, mostrando os 
//valores do acumulador e do elemento da vez a cada passo


const resultado = frutas.reduce((acc, e) => {
    console.log(`ACUMULADOR: ${acc} | ELEMENTO ATUAL: ${e}`);
    return acc.toUpperCase() + ' ' + e.toUpperCase();
});

console.log('\nRESULTADO FINAL:', resultado);