const resultadoP = document.querySelector("#resultado");
const nuemroInput = document.querySelector("#numero")

function ePar(numero){
    return (numero%2) ==0;
}

//procedimento
function verificarParOuImpar(){
    let numero = +numeroInput.value;
}
if (isNaN(numero)){
    resultadoP.textcontent = "Por favor, insira um número.";
    return;
}


if (ePar(numero)){
    resultadoP.textContent = numero + " é par. ";
}

else {
    resultadoP.textContent = numero + " é ímpar. ";
}