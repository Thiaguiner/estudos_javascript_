//escreva uma função que recebe um numero
//retorne o seguinte
//número é divisivel por 3 = Fizz
//número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//número não é divisivel por 3 nem 5 = retorna o proprio numero
//checar se o numero é realmente um número 
//usar a função de 0 A 100

function FizzBuzz(numero){
    if(typeof numero !== "number") return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 ==0) return "Fizz";
    if(numero % 5 ===0) return "Buzz";
    return numero; 
}
for(let i = 0; i <=100; i++){
    console.log(i, FizzBuzz(i))
}