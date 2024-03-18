let numero = prompt("digite um numero")
numero = Number(numero)//poderia ser feito tbm let numero = ParseInt(prompt("digite um numero"))
// ou poderia ser feito tbm const numero = Number(prompt("digite um número"))
const numeroTitulo = document.getElementById("numero-titulo")
const texto = document.getElementById("texto")
numeroTitulo.innerHTML = numero
//texto.innerHTML = `<p>Seu número +2 é: ${numero + 2 } </p>.`
let num1 = Math.floor(numero);
let num2 = Math.ceil(numero)



document.write(`A raiz quadrada é: ${numero ** 0.5}<br />`)
document.write(`O valor arredondado para baixo é: ${num1}<br />`)
document.write(`O valor arredondado para cima é: ${num2}<br />`)
document.write(`${numero} é um inteiro: ${Number.isInteger(numero)}<br />`)
document.write(`${numero} é um NaN: ${Number.isNaN(numero)}<br />`)
document.write(`Com duas casas decimais: ${numero.toFixed(2)}<br />`)


