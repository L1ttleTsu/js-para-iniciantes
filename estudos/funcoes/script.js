addEventListener('click' /*parametro*/, function(){
    console.log("Você clicou em algum lugar da página.");
}/*parametro(uma função pode ser parametro de outra)*/)

/*Funções não são visiveis fora do bloco dela*/

function faltaVisitar(numeroDePaisesVisitados) {
    if (typeof numeroDePaisesVisitados !== "number") {
        return "Você deve digitar um número! Ex: 3";
    }
    else {
        var totalPaises = 193;;
        return totalPaises - numeroDePaisesVisitados;
    }
}
function verificacaoTrueOuFalse(p) {
    if(p) {
        return true;
    }
    else {
        return false;
    }
}
function calcularPerimetro(l1, l2, l3, l4) {
    return l1 + l2 + l3 + l4;
}
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
function tipoDoDado(p) {
    return typeof p;
}
function paridade(p) {
    if (typeof p !== "number") {
        return "Digite um nú8mero válido! O número deve ser escrito de maneira númerica, como 1, 2, 3 etc.";
    }
    else if (p % 2 == 0) {
        return "O número é par!"
    }
    else {
        return "O número é ímpar!"
    }
}