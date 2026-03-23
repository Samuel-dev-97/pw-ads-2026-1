const nome = 'Norman'
const idade = 20
const cidade =  'Belo Horizonte/MG'

//MESCLANDO STRINGS COM VARIÁVEIS USANDO CONCATENAÇÃO
const msg1 = 'Meu nome é' + nome +'tenho' + idade + 'anos e moro' + cidade + '.'

console.log(msg1)

/*
    MESCLANDO STRINGS  E VARIÁVEIS USANDO TEMPLATE STRING, TEMPLATES TRINGS SÃO obrigatóriamente delimitadas por ''
    (backticks / acentos graves / "crases")
*/

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos de idade e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma tempalte string, não estamos limitados a usar
//apenas variáveis dentro do símbolo ${} qualque código JS válido pode ser empregado ali
console.log(`EM ${2026 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)
