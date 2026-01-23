/*Quase tudo no JS é um objeto, experimente colocar 
um . depois de um elemento, se aparecer alguma coisa
é provavelmente métodos e propriedades, ou seja, 
o elemento é um objeto*/
var num = 11.8;
console.log(num.toFixed());

var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {return "olá, mundo"});


/*Propriedades ou métodos de string*/
var nome = "Bruno";
console.log(nome.charAt(0))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.length)

/*Propriedades ou métodos do DOM */

// appendchild
// getelementbyid
// getelemenetbyclassname
// innerhtml
// inntertext

/* */
