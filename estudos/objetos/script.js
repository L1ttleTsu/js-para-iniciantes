/*Um objeto é um conjunto variáveis e funções, que são chamadas de propriedade e métodos*/
var pessoa = {
    nome: "Vitor", //propriedade
    idade: 28, //propriedade
    profissao: "Estudante", //propriedade
    possuiFaculdate: false, //propriedade
};

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado /*O this faz referencia ao objeto, ou seja, ele simplismente acessa uma propriedade do objeto quando você usa this."propriedade" */
    },
};

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
};

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
   return "Escondi";
};

var dadosPessoais = {
    nome: "Bruno",
    sobrenome: "Gonçalves Santos",
    nomecompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
};
function alterarDadosPessoais(nome, sobrenome) {
    dadosPessoais.nome = nome
    dadosPessoais.sobrenome = sobrenome
};