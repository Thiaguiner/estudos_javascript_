//(condição) ? "Valor para verdadeiro" : "valor para falso"
const pontucaoUsuario = 90
//esse é a operação ternária 
const nivelUsuario = pontucaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal"


const corUsuario = "pink"
const corPadrao = corUsuario || "Preta"

console.log(nivelUsuario, corPadrao)

/*if(pontucaoUsuario >= 1000){
    console.log("Usuário VIP")                   // tem esse jeito de fazer
} else {                        
    console.log("Usuário normal")
}*/                                       