
function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select audio
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //select div
    if (!audio) return; // detenemos la funcion en caso de presionar una tecla no asignada 
    audio.currentTime = 0; //reinicia el sonido desde 0 para no esperar que se reproduzca completamente
    audio.play();
    key.classList.add('playing')
}

function removeTransition() {
    this.classList.remove('playing'); // this es la key dentro del forEach
}

const keys = document.querySelectorAll('.keys'); // se seleccionan todos los divs para iterarlos,no se puede hacer eventListener sobre un array
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)