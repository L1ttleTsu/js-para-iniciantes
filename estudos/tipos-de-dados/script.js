// Verifique os tipos de dados abaixo
var nome = "Linus"; // String
var idade = 30; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
console.log(typeof(comida))
// Observe que se você dar um console.log em uma variável com o tipo
// de dado symbol, ele vai retornar object, e não symbol. Isso é um tipo 
// problema que não foi solucionado, porque se fosse solucionado ele 
// quebraria muitos códigos antigos


// Template string
var gols = 1000;
frase = `Romário fez ${gols} gols`; // use o acento de crase para usar 
// o template string e colocar uma variavel dentro de uma string de 
// maneira mais simples
console.log(frase)