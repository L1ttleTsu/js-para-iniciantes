function calcularResultado() {
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    document.getElementById("resultadoDaSoma").textContent = `o resultado da soma é ${num1 + num2}.`
};