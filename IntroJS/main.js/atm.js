let saldo = 0.00;

const saldoSpan = document.querySelector("#saldo-atual");
const valorInput = document.querySelector("#valor-monetario");
const formatadorMoedaReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

function sacar(){
    let valorSaque = parseFloat(valorInput.value.trim());
    if (valorSaque > saldo) {
        alert("Saldo insuficiente.");
    } else {
        let confirmacao = confirm("Você deseja sacar " + formatadorMoedaReal.format(valorSaque) + "?");
        if (confirmacao) {
            saldo -= valorSaque;
            atualizarSaldo(saldo);
            alert("Saque de " + formatadorMoedaReal.format(valorSaque) + " realizado com sucesso.");
        } else {
            alert("Saque cancelado pelo usuário.");
        }
    }
}

function depositar(){
    let valorDeposito = parseFloat(valorInput.value.trim());
    let confirmacao = confirm("Você deseja depositar " + formatadorMoedaReal.format(valorDeposito) + "?");
    if (confirmacao) {
        saldo += valorDeposito;
        atualizarSaldo(saldo);
        alert("Depósito de " + formatadorMoedaReal.format(valorDeposito) + " realizado com sucesso.");
    } else {
        alert("Depósito cancelado pelo usuário.");
    }
}

function atualizarSaldo(valor){
    saldoSpan.textContent = formatadorMoedaReal.format(valor);
}

window.addEventListener("load", () => {
    atualizarSaldo(saldo);
});