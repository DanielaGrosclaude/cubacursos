// VARIABLES
//no se reasigna entonces es const
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector ('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarritos = [];


//listeners
cargarEventListeners ();


function cargarEventListeners () {
    //agrega cursos presionando "agregar"
    listaCursos.addEventListener('click', agregarCurso);

}


//Funciones 
function agregarCurso(e){
    e.preventDefault();
    

    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html y extrae

function leerDatosCurso (curso){
    //console.log(curso);

    //crear un obj con el contenido
    const infoCurso ={
        imagen:curso.querySelector('img').src,
        titulo: curso.querySelector ('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //console.log(infoCurso)
    //agrega elementos al arreglo carrito
    articulosCarritos = [...articulosCarritos, infoCurso];

    console.log(articulosCarritos);
    
    carritoHTML();
}


//Muestra el carrito de compras en el html

function carritoHTML(){

    //Limpar HTML
    limpiarHTML();


    //Recorre el carrito y genera html
    articulosCarritos.forEach(curso =>{
        const { image, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad}</td>
            <td> <a href="a"  class="borrar-curso" data-id"${id}> x </a>
        `;

           //agrega el html del carrito en el tbody
           contenedorCarrito.appendChild(row);   
    });
}


//Elimina cursos del tbody

function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

    }
}

