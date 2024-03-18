/* function soma(x, y){
if(typeof x !== "number" || typeof y !== "number"){
    throw ("x e y precisam ser números");
}
return x + y;
}
console.log(soma(1, 2));
console.log(soma("1", 2)); */

try{
    // é executada quando não há erros
console.log("Abri um arquivo")
console.log("Maipulei o arquivo")
console.log("Fechei o arquivo")
}catch(e) {
// é executada quando há erros
console.log("Tratabdi o erro")
}
finally{
// é executado sempre    
console.log("FINALLY: eu sempre sou executado")
}

function retornaHora(data){
    if(a){
        //depois termino esse exercicio
    }
}