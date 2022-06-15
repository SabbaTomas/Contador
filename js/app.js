let numero = document.getElementById("contador_numero");

let contador = 0;


const incrementar = () => {
        actualizarContador(++contador);
}

const decrementar = () => {
    if(contador > 0){
        actualizarContador(--contador);
    }
}

const reiniciar = () => {
    contador = 0;
    actualizarContador(contador);
}



const actualizarContador = (num) => {
    numero.innerHTML = num;
}

