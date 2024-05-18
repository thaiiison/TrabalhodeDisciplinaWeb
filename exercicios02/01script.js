function calcularTroco() {
    var valorPago = parseFloat(document.getElementById("valorPago").value);
    var precoProduto = parseFloat(document.getElementById("precoProduto").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(valorPago) || isNaN(precoProduto)) {
        resultado.style.display = "block";
        resultado.style.color = "red";
        resultado.innerHTML = "Por favor, insira valores válidos.";
    } else if (valorPago < precoProduto) {
        resultado.style.display = "block";
        resultado.style.color = "red";
        resultado.innerHTML = "Valor pago é insuficiente para cobrir o preço do produto.";
    } else {
        var troco = valorPago - precoProduto;
        resultado.style.display = "block";
        resultado.style.color = "green";
        resultado.innerHTML = "O troco a ser dado é: R$ " + troco.toFixed(2);
    }
}
