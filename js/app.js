let numero = document.getElementById("seleccion");
let contadores = document.getElementById("contador_main");
let cantidadDeContadores = document.getElementsByClassName("nums");

let contador = 0;



const cambiarContador = () => {
    console.log("hola");
}

const incrementar = () => {
  actualizarContador(++contador);
};

const decrementar = () => {
  if (contador > 0) {
    actualizarContador(--contador);
  }
};

const reiniciar = () => {
  contador = 0;
  actualizarContador(contador);
};

const agregarContador = () => {
  if (cantidadDeContadores.length < 3) {
    const h3 = document.createElement("h3");
    h3.className = "nums";
    h3.innerHTML = 0;
    contadores.appendChild(h3);
  }
};

const quitarContador = () => {
    if(cantidadDeContadores.length > 1) {
        contadores.lastChild.remove();
    }
};

const actualizarContador = (num) => {
  seleccion.innerHTML = num;
};

