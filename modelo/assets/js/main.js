//Capturar evento de submit do formulario
const form = document.querySelector("#formulario")  

form.addEventListener("submit", function (e) { //adicionou um evento do formulario que foi o submit
    e.preventDefault()  //preventdefault para o formulario nao ser enviado
    const inputPeso = e.target.querySelector("#peso") //capturou os dados dos input
    const inputAltura = e.target.querySelector("#altura")
   
    const peso = Number(inputPeso.value) //converteu os inputs para Number
    const altura = Number(inputAltura.value) //converteu os inputs para Number

    if (!peso) {
        setResultado("Peso inválido", false)  ///fizemos isso para se caso retornar um NAN ele retorna peso invalido
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false)///fizemos isso para se caso retornar um NAN ele retorna altura invalida
        return;
    }

    const imc = getImc(peso, altura) //getimc -> criamos uma funcao especifica para calcular o imc
    const nivelImc = getNivelImc(imc) //nivel do imc -> funcao especifica

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    
    setResultado(msg, true)

});
function getNivelImc(imc) {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]
    //esse de cima -> criamos uma array(uma lista de strings), baseado no nivel do imc
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5)  return nivel[0]
    

}

function getImc(peso, altura) {  //essa função só faz o calculo normal do imc
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP() { //criamos uma função que só cria paragrafo
    const p = document.createElement("p")
    return p;

}

function setResultado(msg, isValid) { //função que seta o resultado, recebe uma msg e se esse resultado é válido
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = "";


    const p = criaP(); //para fazer um paragrafo

    if (isValid){ //ver se o resultado é válido, se for valido ele retorna o resultado
        p.classList.add("paragrafo-resultado") //classe de fundo verde
    }else{
        p.classList.add("bad") // se for falso ele retorna bad de fundo vermelho
    }

    p.innerHTML = msg;
    resultado.appendChild(p) //seta o innerhtml com a msg que recebemos ai de cima e por fim adc o paragrafo no resultado

}
