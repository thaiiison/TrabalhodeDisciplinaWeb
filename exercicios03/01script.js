function calcularReajuste() {
    // Obtém o valor do saldo a partir do input
    let saldo = parseFloat(document.getElementById("saldo").value);

    // Verifica se o saldo é um número válido
    if (isNaN(saldo) || saldo <= 0) {
        alert("Por favor, insira um saldo válido.");
        return;
    }

    // Calcula o reajuste de 1%
    let reajuste = saldo * 0.01;
    let novoSaldo = saldo + reajuste;

    // Exibe o resultado
    document.getElementById("resultado").innerText = `O saldo com reajuste de 1% é: R$ ${novoSaldo.toFixed(2)}`;
}
