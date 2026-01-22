function calcularFuncaoDoPrimeiroGrau() {
    const valorDeEntrada = Number(document.getElementById("valorDeEntrada").value);
    const coeficienteAngular = Number(document.getElementById("coeficienteAngular").value);
    const termoIndependente = Number(document.getElementById("termoindependente").value);
    const resultadoDaFuncao = coeficienteAngular * valorDeEntrada + termoIndependente;
    document.getElementById("resultadoDaFuncao").textContent = `O resultado é ${resultadoDaFuncao}`
}

function calcularFuncaoQuadratica() {
    const valorDeEntradaDaFuncaoQuadratica = Number(document.getElementById("valorDeEntradaDaFuncaoQuadratica").value);
    const coeficienteQuadratico = Number(document.getElementById("coeficienteQuadratico").value);
    const coeficienteLinear = Number(document.getElementById("coeficienteLinear").value);
    const termoIndependenteDaFuncaoQuadratica = Number(document.getElementById("termoIndependenteDaFuncaoQuadratica").value);
    const resultadoDaFuncao = coeficienteQuadratico * (valorDeEntradaDaFuncaoQuadratica ** 2) + coeficienteLinear * valorDeEntradaDaFuncaoQuadratica + termoIndependenteDaFuncaoQuadratica;
    document.getElementById("resultadoDaFuncaoQuadratica").textContent = `O resultado é ${resultadoDaFuncao}`;
}