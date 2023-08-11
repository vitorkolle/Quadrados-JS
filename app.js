'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}
function mudarForma(){
    forma2.classList.toggle('circulo')
}
function imagem(){
    forma3.classList.toggle('palmeiras')
}
function carregamento(){
    forma4.classList.toggle('carregamento')
}
function aumento(){
    forma5.classList.toggle('aumento')
}
function diminuicao(){
    forma6.classList.toggle('diminuicao')
}
function triangulo(){
    forma7.classList.toggle('triangulo')
}
function giro(){
    forma8.classList.toggle('giro')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', imagem)
forma4.addEventListener('click', carregamento)
forma5.addEventListener('click', aumento)
forma6.addEventListener('click', diminuicao)
forma7.addEventListener('click', triangulo)
forma8.addEventListener('click', giro)
