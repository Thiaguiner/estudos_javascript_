//como declarar funções, várias formas
function falaOi(){
    console.log('oie')
}
falaOi()    

//first-class -> objetos de primeira classe
//function expression
//cria uma variavel e jogar uma função no meio dela

const souUmDado = function(){   //falando que uma constante recebe uma função como dado
    console.log('Sou um dado')
}
souUmDado();
/* 
function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo:")  
    funcao()   //esse exemplo aqui eu executei uma função e nessa msm função eu declarei a SOUUMDADO depois, posso manipular isso tranquilamente
}
    executaFuncao(souUmDado); */

    //arrow function
 
const funcaoarrow = () => {
    console.log("Sou uma arrow function")
}    
funcaoarrow()

//function dentro de um objeto
const obj = {
    falar: function(){
        console.log("Estou falando...")
    }
}
obj.falar()

//todas essas funções que eu fiz são tratadasd como objetos de primeira classe;