// var avengers = new Array()

var avengers = ['Homem de ferro', 'Capitão América', 'Thor'];

console.log(avengers)

avengers.push('Hulk')

console.log(avengers)

avengers.push('Homem Aranha')
// avengers.pop(); // remove o utlime registro do array
// avengers.shift(); // shift remove o primeiro registro do meu array

var indice = avengers.indexOf('Homem Aranha')
avengers.splice(indice)

avengers.push('Viúva Negra')
avengers.push('Gavião Arqueiro')

console.log(avengers)

var newAvengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newAvengers)
console.log(result)