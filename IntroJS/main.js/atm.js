let saldo = 0.00;

const saldoSpan = document.querySelector("#saldo-atual");
const valorInput = document.querySelector("#saldo-atual");
const formatadorMoedaReal = new Intl.NumberFormat('pt-BR' {
    style: 'currency',
    currency: 'BRL'});

    function sacar(){
        
    }

    function depositar(){
        let valorDeposito = +valorInput.value.trim();
        let confirmacao = confirm("Você deseja depositar? " + formatadorMoedaReal.format(valorDeposito) + "?");
        if (confirmacao){
            saldo+= valorDeposito;
            atualizarSaldo(saldo);
            alert("Depósito de " + formatadorMoedaReal.format(valorDeposito) + "realizado com sucesso.");
        }
        else{
            alert("Deposito cancelado pelo usuário. ");

        }

    }

    function atualizarSaldo(valor){
        saldoSpan.textContent = formatadorMoedaReal
        .format(valor);

    }

    window.addEventListener("load", () => {
        atualizarSaldo(saldo);

    });