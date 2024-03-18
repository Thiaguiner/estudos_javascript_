//escreva uma função ePaisagem, que recebe largura e altura,
// de uma imagem, retorne true se tiver no modo paisagem e false se tiver na horizontal

function ePaisagem(largura, altura){
return largura > altura ? true : false
}
console.log(ePaisagem(1920,1080))