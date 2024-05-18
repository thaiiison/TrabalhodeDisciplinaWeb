function calcularValorFinal() {
    var precoQuilo = Number(document.getElementById("precoQuilo").value);
    var quantidadeQuilos = Number(document.getElementById("quantidadeQuilos").value);
    var resultado = document.getElementById("resultado");
}
    function calcularCompra() {
        let valorProduto = parseFloat(campoValorProduto.value);
        let pesoProduto = parseFloat(campoPesoProduto.value);
    
        if (isNaN(valorProduto) || isNaN(pesoProduto)) {
            resultado.textContent = "Por favor, insira valores válidos.";
            return;
        }
    
        let total = pesoProduto * valorProduto;
    
        if (total < 0) {
            resultado.textContent = "O valor pago é insuficiente.";
        } else {
            resultado.textContent = "Total: R$ " + total.toFixed(2);
        }
    }
    
    btCalcularCompra.onclick = function() {
        calcularCompra();
    }