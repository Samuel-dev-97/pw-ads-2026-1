/*calArea() é uma função que calcula a área de uma figura geométrica plana,
a altura e o tipo da forma
*/
function calArea(base, altura, tipo){
   switch(tipo){
    case 'R': //RETANGULO
      return base * altura
    case 'T'://TRIÂNGULO
      return base * altura / 2
    case 'E'://ELIPSE / CÍRCULO
      return (base /2) * (altura / 2) *Math.PI
    default: //FORMAR INVÁLIDAS / DESCONHECIDAS
      return undefined
   }
}

console.log(`A áre do triâgulo 10x30: ${calArea(10, 30, 'T')}`)
console.log(`Área elipse (círculo) 7, 5x7,5: ${calArea(7.5, 7.5, 'E')}`)
console.log(`Área retângulo  12,8x15,5: ${calArea(12.8, 15.5,'R')}`)
console.log(`Área forma inválida 8x17: ${calArea(8, 17, 'H')}`)

/*
    Regras para o uso de parâmentros predefinidos:
    1) O parâmetro predefinido deve vir sempre POO ÚLTIMO na lista de 
    parâmetros de uma função
    2)Pode haver mais de um parâmetro predefinido. Nesse caso, devem ser sempre os ÚLTIMOS
*/