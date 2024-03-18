const numero = 10
//se isso ocorrer (numero >= 0 && numero <= 5) faça isso {codigo}
//se isso nao acontecer, faça isso {codigo}
if (numero >= 0 && numero <= 5) {
    console.log("O número esta entre 0 e 5.");
} else if (numero >= 6 && numero <=8){
    console.log("O número está entre 6 e 8");
} else if(numero >= 9 && numero <= 11){  //verdadeiro
    console.log("O seu número está entre 9 e 11");
}else {
    console.log("O seu número não está entre 0 e 11");
}