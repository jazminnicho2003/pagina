const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');

const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');

cargarEventListeners();


function cargarEventListeners(){
    elementos1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemento);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

}
function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemnto = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}
function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo:elemento.querySelector('h3').textContent,
        precio:elemento.querySelector('.precio').textContent,
        id:elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}
