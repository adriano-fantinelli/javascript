// Loops

// for (var a = 0; a < 10; a++) {
//         console.log('Repetindo por '+ a + ' a é menor que 10')
// }

// var i = 0;

// while(i <= 10){
//         console.log('Repetindo por '+ i + ' a é menor que 10');
//         i++;
// }

var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captian America', 'Black Panther', 'Black Window']

avengers.forEach(function(value, key){
        console.log(value + ' na posição ' + key)
})