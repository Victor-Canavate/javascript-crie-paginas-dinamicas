let listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

let display = document.querySelector('.display');

let teclado = document.querySelector('.teclado')

teclado.addEventListener('click', function(event){
    display.value = display.value + event.target.value
    
    if(display.value.length > 9) {
        clear();
    }
})
 
let clearDisplay = document.querySelector('.clear');

function clear() {
    let display = document.querySelector('.display');
    display.value = ''
}

clearDisplay.onclick = clear;
