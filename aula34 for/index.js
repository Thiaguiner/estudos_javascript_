//for in -> lê os indices ou chaves do objeto
/* const pessoa = {
    nome:'Thiago',
    sobrenome: 'Carneiro',    
    idade: 30
}
for(let i in pessoa){
    console.log(i, pessoa[i])  //FOR IN, ELE JA CORTA BOA PARTE DO CODIGO, MAS AINDA ASSIM TEM QUE BOTAR O INDICE. EX:pessoa[i]
}
 */
/* const frutas = ['Pêra','Maça', 'Uva'];

for(let i in frutas){
console.log(frutas[i])
}
 */

/* for(let i=0; i<frutas.length; i++){    //FOR CLASSICO USANDO TODA A ESTRUTURA
    console.log(frutas[i])
} */

const nomes = ['Thiago', 'Otávio', 'Luiz']
for(let i of nomes){                    //FOR OF, NAO PRECISA ESCREVER O INDICE É MAIS CURTO, SO COLOCAR O VALOR DO i, E JA MOSTRA TODA ESTRUTURA
    //console.log(i)                     

}

nomes.forEach(function(valor, indice){
    console.log(valor, indice)
})


//For in -> mais destinado para objetos ->retorna com indice ou chaves(array, strings ou objetos)
//For of -> já daria problema para objetos ->retorna o valor em si(iteraveis, arrays ou strings)
//For clássico -> geralmente com iteraveis(array ou strings)