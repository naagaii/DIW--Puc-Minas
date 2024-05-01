let nota1 = prompt("Digite a primeira nota:");
let nota2 = prompt("Digite a segunda nota:");
let nota3 = prompt("Digite a terceira nota:");


nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);


if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  alert("Por favor, digite apenas números válidos.");
} else {
 
  let media = (nota1 + nota2 + nota3) / 3;

 
  alert("A média das três notas é: " + media.toFixed(2));
}