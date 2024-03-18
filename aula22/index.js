/*
Operadores lógicos
&& -> And -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR -> OU ->
! -> NOT -> NÂO 
*/
//const expressaoAnd = true && true && true && false
//const expressaoOr = true || false || false || false //so retorna falso se todas tiverem false
//console.log(expressaoOr)

////////////////////////////////////////////////// AND ///////////////////////////////////////////////
   

//const usuario = "Thiago"
//const senha = '123456'
//                         true                     false
//const vailogar = usuario ==="Thiago" && senha === "123456"
//console.log(vailogar) //vai retornar false 

//console.log("thiago" && 0 && "Maria") //retorna 0
//console.log("thiago" && true && "Maria") //retorna maria, a ultima expressão*
//console.log("thiago" && 0 && NaN) // retorna false

//valores que retornam si mesmo
/*FALSY
0
""  ''  ``  //string vazia*
null / undefined
Not a number NaN
*/

/////////////////////////////////////////// OR ////////////////////////////////////////////////////////////////
//console.log(0 || false || null || "Thiago Carneiro" || true)  //ele busca o primeiro valor verdadeiro, que no caso foi a string com coisa dentro

//const corUsuario = null;
//const corPadrao =   corUsuario|| "preto" 
//console.log(corPadrao) //retorna preto, pq o usuario n selecionou nehuma cor -> ai foi como padrao o preto

//const corUsuario = "vermelho";
//const corPadrao =  corUsuario|| "preto" 
//console.log(corPadrao) // retorna vermelho, pq o usuario selecionou o 1 valor verdadeiro encontrado 
 
const a = 0
const b = null
//const c = "true" // retorna isso aqui, pq foi o primeiro valor verdadeiro
const c = false
const d = false
const e = NaN

console.log(a || b || c || d || e) //retorna NaN pq é o ultimo valor falso a ser citado