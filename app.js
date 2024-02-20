let indice = 0
let cantImg = document.querySelectorAll('.slide-content').length
let active = document.getElementsByClassName('circulos-individual')
let slide = document.querySelector('.slide')
let tiempo = 3000
let timeoutId

console.log('indice: '+indice)

function cambiarImgAndIndice(indiceRecibido){
    slide.style.left = `-${indiceRecibido * 100}%`
    slide.style.transition = 'left 0.7s ease-in-out';
    
    /* ----- Borrar actives anteriores ----- */
    for(let i = 0; i < active.length; i++){
        active[i].classList.remove('active')
    }

    /* -------- Agregar nuevo active ------- */
    active[indiceRecibido].classList.add('active')
}

/* --------- Flecha Inzquierda --------- */
document.querySelector('.flechas-left').addEventListener('click', () => {
    clearTimeout(timeoutId)
    console.clear()
    indice = (indice - 1 + cantImg) % cantImg
    console.log('indice: '+indice)
    cambiarImgAndIndice(indice)
    timeoutId = setTimeout(flechaDerecha, tiempo)
})

/* ----------- Flecha derecha ---------- */
function flechaDerecha(){
    clearTimeout(timeoutId)
    console.clear()
    indice = (indice + 1) % cantImg
    console.log('indice: '+indice)
    cambiarImgAndIndice(indice)
    timeoutId = setTimeout(flechaDerecha, tiempo)
}
document.querySelector('.flechas-right').addEventListener('click', () => {
    flechaDerecha()
})

for(let i = 0; i < active.length; i++){
    active[i].addEventListener('click', () => {
        clearTimeout(timeoutId)
        console.clear()
        indice = i
        console.log('indice: '+indice)
        cambiarImgAndIndice(indice)
        timeoutId = setTimeout(flechaDerecha, tiempo)
    })
}

timeoutId = setTimeout(flechaDerecha, tiempo)