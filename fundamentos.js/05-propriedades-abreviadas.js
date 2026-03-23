//Alguns  dados de um usuário
const fullname = 'Jordanda'
const username = 'Dana'
const group =  'alunos'

//Criando um objeto a partir das variáveis acima
const user1 ={
    fullname: fullname,
    username: username, 
    group: group
}
console.log(user1)

/*Quando o nome da propridade de um objeto é idêntico
à da variável que lhe dará o  valor, é possível usar 
a sintaxe chamada PROPRIEDADE ABREVIADA. Ela permite não 
repetir os nomes das variáveis à frente dos nomes das propriedades
*/
const user2 = {
    fullname,
    username, 
    group
}
console.log(user2)

//Um objeto pode mesclar propriedades abreviadas
//não abreviadas
const user3 ={
    fullname,
    username, 
    password:'12345@Os',
    group,
    lastLogin:'2026-03-02 11:27:35'
}
console.log(user3)

/*Usando propriedades abreviadas para depuração (DEBUG)*/
const x = 10, y = 'batata'

/*
 Exibindo o valor das duas variáveis com console.log().
 Observe que os valores são  mostrados, mas a saída não informa quais as variáveis de onde provêm os valores.

*/
console.log(x,y)
/*Saída melhorada: passando um objeto formado pelas variáveis como propriedades abreviadas
para console.log(), conseguimos identificar de onde vem os valores
*/
console.log({x,y})

//Encontramos o maior e menor números em uma série
let minimo = Math.min(2, 4, 0, 11, -1)
let maximo = Math.max(2, 4, 0, 11, -1)

console.log('Valores minimo e máximo determinados a partir de valores avulsos:')
console.log({minimo,maximo})

console.log('-'.repeat(80))

//E se os números estivessem dentro de um vetor
const nums = [2, -5, 4, 0, 11, -1]

minimo = Math.min(nums)
maximo = Math.max(nums)

console.log('Valores mínimo e maximo determinados a partir de um vetor: ')
console.log({minimo,maximo})

console.log('-'.repeat(80))

/*
 A sintaxe de espalhamento (spreading), representada por ... antes 
 do nome de uma variável que  contém um vetor ou um objeto, é capaz de "desempacotar" um vetor ou um objeto em uma série de valores avulsos
*/

minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log('Valores calculados após aplicação do espalhamento do vetor: ')
console.log({minimo,maximo})

/* Outros usos a sintaxe de espelhamento*/

const carro1={
 modelo: 'Fiorino',
 marca: 'Fiat',
 ano: '1984',
 cor: 'preta'
}
 //"Copiando" carro1 para carro2
 //para criar uma cópia real de um objeto (e não uma nova referência a ele), podemos usar a sintaxe  de espelhamento
 //ela "desmonta" o objeto original  e, em  seguida, "remonta", mas em uma nova posição de memória
 const carro2 = carro1

 //Mudando o valor das propriedades do carro2
 carro2.modelo = 'Fusca'
 carro2.marca = 'Volkswagem'
 carro2.cor = 'Azul'
 carro2.ano = '1989'
 
 console.log('-'.repeat(80))
 //Exibindo ambos os carros

 console.log({carro1, carro2})