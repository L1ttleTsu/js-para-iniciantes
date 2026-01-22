function calcularFuncao() {
    const valorDeEntrada = Number(document.getElementById("valorDeEntrada").value);
    const coeficienteQuadratico = Number(document.getElementById("coeficienteQuadratico").value);
    const coeficienteLinear = Number(document.getElementById("coeficienteLinear").value);
    const termoIndependente = Number(document.getElementById("termoIndependente").value);
    const resultadoDaFuncao = coeficienteQuadratico * (valorDeEntrada ** 2) + coeficienteLinear * valorDeEntrada + termoIndependente
    document.getElementById("resultadoDaFuncao").textContent = resultadoDaFuncao
}