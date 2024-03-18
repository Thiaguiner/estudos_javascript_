/*const pessoa1 = {
nome: 'Thiago',
sobrenome: 'Carneiro',
idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)*/

function criaPessoa(nome, sobrenome, idade){
    return{
        nome:nome, /*da para fazer assim tbm: return{nome, sobrenome, idade}*/ //não precisando desse ://nome dessa função é:: FACTORY
        sobrenome:sobrenome,                           
        idade:idade
    }
}
const pessoa1 = criaPessoa("Thiago", "Carneiro", 25)
const pessoa2 = criaPessoa("João", "Miranda", 35)
const pessoa3 = criaPessoa("Junior", "Oliveira", 32)
const pessoa4 = criaPessoa("Maria", "Lara", 26)
const pessoa5 = criaPessoa("Luiz", "Otavio", 71)
console.log(pessoa1.nome, pessoa2.sobrenome)

