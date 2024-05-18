function calcularMedias() {
    // Obtém os valores dos três números a partir dos inputs
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);

    // Verifica se os números são válidos
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, insira três números válidos.");
        return;
    }

    // Calcula a média aritmética
    let mediaAritmetica = (numero1 + numero2 + numero3) / 3;

    // Calcula a média ponderada com os pesos 3, 2 e 5
    let mediaPonderada = ((numero1 * 3) + (numero2 * 2) + (numero3 * 5)) / 10;

    // Calcula a soma das duas médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    // Calcula a média das médias
    let mediaDasMedias = somaMedias / 2;

    // Formata os resultados com duas casas decimais
    mediaAritmetica = mediaAritmetica.toFixed(2);
    mediaPonderada = mediaPonderada.toFixed(2);
    somaMedias = somaMedias.toFixed(2);
    mediaDasMedias = mediaDasMedias.toFixed(2);

    // Exibe os resultados
    document.getElementById("mediaAritmetica").innerText = `Média Aritmética: ${mediaAritmetica}`;
    document.getElementById("mediaPonderada").innerText = `Média Ponderada: ${mediaPonderada}`;
    document.getElementById("somaMedias").innerText = `Soma das Médias: ${somaMedias}`;
    document.getElementById("mediaDasMedias").innerText = `Média das Médias: ${mediaDasMedias}`;
}
