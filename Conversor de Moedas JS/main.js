// Função para converter o valor da moeda de origem para a moeda de destino
function converter() {
    // Objeto com as taxas de câmbio para cada moeda
    const taxaDeCambio = {
        dolar: {
            dolar: 1,
            euro: 0.82,
            libra: 0.73,
            iene: 111.07,
            real: 5.4
        },
        euro: {
            dolar: 1.22,
            euro: 1,
            libra: 0.89,
            iene: 129.81,
            real: 6.2
        },
        libra: {
            dolar: 1.37,
            euro: 1.12,
            libra: 1,
            iene: 145.76,
            real: 7.5
        },
        iene: {
            dolar: 0.009,
            euro: 0.0077,
            libra: 0.0069,
            iene: 1,
            real: 0.049
        },
        real: {
            dolar: 0.19,
            euro: 0.16,
            libra: 0.13,
            iene: 20.42,
            real: 1
        }
    };

    // Lê o valor digitado pelo usuário e converte para um número decimal
    const valorString = document.getElementById("valor").value;
    const valor = parseFloat(valorString.replace(",", ".")); // Substitui vírgula por ponto

    // Lê a moeda de origem selecionada pelo usuário
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    // Lê a moeda de destino selecionada pelo usuário
    const moedaDestino = document.getElementById("moedaDestino").value;

    // Calcula o valor usando as taxas de câmbio
    const valorConvertido = valor * taxaDeCambio[moedaOrigem][moedaDestino];

    // Exibe o resultado 
    document.getElementById("resultado").innerHTML = `O valor convertido é ${valorConvertido.toFixed(2)} ${moedaDestino.toUpperCase()}.`;
}