const number = document.querySelector('h1')
const botao = document.querySelector('button')


botao.onclick = function () {
    number.innerHTML = Math.floor(Math.random() * 60)


}