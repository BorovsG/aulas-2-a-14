//getElementsByTagName - Seleciona todas as tag que voê desejar
let paragrafo = document.getElementsByTagName('p')
paragrafo[0].innerHTML = 'Luiz Carlos elden lord'
let input = document.getElementsByTagName('input')[0].value

//getElementById - seleciona um elemento do tipo ID
var titulo = document.getElementById('titulo')
titulo.innerHTML = 'ALterado usando JS'

//getElementsByClassName - seleciona todos os elementos do tipo class
const caixas = document.getElementsByClassName('caixa')
caixas[0].style.background = 'magenta'
caixas[1].style.background = 'cyan'

//querySelectos - seleciona um elemento do tipo Class ou ID
const paragrafoQuery = document.querySelector('#paragrafoQuery')
paragrafoQuery.style.backgroundColor = 'yellow'
paragrafoQuery.style.padding = '10px'

//querySelectorAll - seeciona todos os elementos do tipo Class ou ID
const caixaQuery = document.querySelectorAll('.caixaQuery')
caixaQuery[0].style.backgroundColor = 'gold'
caixaQuery[1].style.backgroundColor = 'lightGreen'



function alteratexto() {
    let input = document.getElementsByTagName('input')[0].value
    titulo.textContent = input
}

function alterartexto() {
    let input = document.getElementsByTagName('input')[1].value
    paragrafoQuery.textContent = input
}