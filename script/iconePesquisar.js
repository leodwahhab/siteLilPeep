const input = document.querySelector('header .area-pesquisa input')

const moverIconeFoco = function(){
    const icone = document.querySelector('header .area-pesquisa button')
    icone.style.right = '10px'
}
const moverIconeSemFoco = function(){
    const icone = document.querySelector('header .area-pesquisa button')
    icone.style.right = '6px'
}

function carregar(){
    input.addEventListener('onfocus', moverIconeFoco)
    input.addEventListener('onblur', moverIconeSemFoco)
}