/*var videoGames = ["Switch", "PS4", "XBOX"];

videoGames.push("3DS")
console.log(videoGames)


O for funcina com o inicio, condição e incremento
for(let i = 0; i <= 10; i++) {
    console.log(i);
};

var i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

videoGames.forEach(function(item) {
    console.log(item)
}) 
*/
var anoCopaBrasil = [1959, 1962, 1970, 1994, 2002]
for(let i = 0; i < anoCopaBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa de ${anoCopaBrasil[i]}!`)
}
anoCopaBrasil.forEach(function(item , i) {
    console.log(`O Brasil ganhou a copa de ${anoCopaBrasil[i]}!`)
}) 

var ultimaFruta = ""
var frutas = ["banana", "maça", "pera", "uva", "melância"]
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if (frutas[i] === "pera") {
        break
    }
}
ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)