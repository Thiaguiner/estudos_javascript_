const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let numero of numeros){
    if(numero ===2){
        continue;  //pulou o numero 2
    }

    if(numero ===7){
        break; //ele quebra a linha antes do selecionado se o console for dps
        //mas se for depois ele nem executa o 7
    }
    console.log(numero)
}