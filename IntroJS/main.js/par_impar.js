const resultadoP = document.querySelector("#resultado");
const numeroInput = document.querySelector("#numero");

function ePar(numero){
    return (numero % 2) === 0;
}

function verificarParOuImpar(){
    let numero = +numeroInput.value;
    
    if (isNaN(numero)){
        resultadoP.textContent = "Por favor, insira um número.";
        return;
    }

    if (ePar(numero)){
        resultadoP.textContent = numero + " é par.";
    } else {
        resultadoP.textContent = numero + " é ímpar.";
    }
}