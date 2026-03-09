//Encontrando o menor e o maior números em uma série
let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)

console.log('Valores mínimo e máximo determinados a partir de valores avulsos:')
console.log({minimo, maximo})

console.log('-'.repeat(80))

//E se os números estivessem em um vetor ?
const nums = [2, -5, 4, 0, 11, -1]

/*
  Math.min() e math.max() não consegue trabalhar quando
  os numeros estão em um vetor
*/
minimo = Math.min(nums)
maximo = Math.max(nums)

console.log('Valores mínimo e máximo determionados a partir de um vetor:')
console.log({minimo, maximo})

console.log('-'.repeat(80))

/*
  A sintaxe de espalhamento (spreading), representada por ... antes
  do nome de uma variável que contém um vetor ou um objeto, é capaz
  de "desempacotar" um vetor ou objeto em uma série de valores avulsos
*/
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log('Valores calculados após aplicação do espalhamento no vetor:')
console.log({minimo, maximo})

/* OUTROS USOS PA A SINTAXE DE ESPALHAMENTO */

const carro1 = {
    modelo: 'fiorino',
    marca: 'fiat',
    ano: 1984,
    cor: 'bege'
}

// "Copiando" carro1 para carro2
//const carro2 = carro1 // NÃO FUNCIONA

//Para criar umacópia real de um objeto (e não uma nova referencia
// a ele), podemos usar a sintaxe de espalhamento. ela "desmonta" o
//objeto original e, em seguida , "remota", mas em uma nova posição
//de memoria
const carro2 = {...carro1}

//Mudando o valor das propriedades da carro2
carro2.modelo = 'Fusca'
carro2.marca = 'Volkswagen'
carro2.cor = 'Preto'
carro2.ano = 1969

console.log('-'.repeat(80))

//Exibindo ambos os carros
console.log({carro1, carro2})

/*
  PROBLEMA: juntar dois ou mais vetores em um terceiro vetor
*/
const frutas = ['maçã', 'banana', 'laranja', 'uva']
const verduras = ['alfaca', 'couve', 'rucula', 'acelga']

const hortifruti = [...frutas, ...verduras]

console.log('-'.repeat(80))
console.log({hortifruti})