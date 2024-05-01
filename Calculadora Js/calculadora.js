let operacao = prompt("Escolha a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");


operacao = parseInt(operacao);

if (operacao < 1 || operacao > 4 || isNaN(operacao)) {
  alert("Operação inválida. Por favor, escolha uma operação válida.");
} else {
  let num1 = prompt("Digite o primeiro número:");
  let num2 = prompt("Digite o segundo número:");


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite apenas números válidos.");
  } else {
    let resultado;
    switch (operacao) {
      case 1:
        resultado = num1 + num2;
        alert("O resultado da soma é: " + resultado);
        break;
      case 2:
        resultado = num1 - num2;
        alert("O resultado da subtração é: " + resultado);
        break;
      case 3:
        resultado = num1 * num2;
        alert("O resultado da multiplicação é: " + resultado);
        break;
      case 4:
        if (num2 !== 0) {
          resultado = num1 / num2;
          alert("O resultado da divisão é: " + resultado);
        } else {
          alert("Não é possível dividir por zero.");
        }
        break;
      default:
        alert("Operação inválida.");
    }
  }
}