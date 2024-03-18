/*
entre 0 e 11 = bom dia
entre 12 e 17 = boa tarde
entre 18 e 23 = boa noite
*/ 

//IF pode ser utilizado sozinho
//ELSE IF não pode ser utilizado sozinho
// sempre que utilizo a palavra else, preciso de um if antes 
// eu posso ter varios else e ifs na condição
// só posso ter 1 else na checagem
//podemos usar condições sem else if, ultilizando apenas if e else
const hora = 0
if(hora >=0 && hora <=11){
    console.log("Bom dia")
}else if(hora >=12 && hora <= 17){
    console.log("Boa tarde")
}if(hora >=18 && hora <=23){
    console.log("Boa noite")
}