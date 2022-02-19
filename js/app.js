// VARIABLES
//no se reasigna entonces es const
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector ('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


//listeners
cargarEventListeners ();


function cargarEventListeners () {
    //agrega cursos presionando "agregar"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

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


    if (articulosCarrito.some( curso => curso.id == infoCurso.id)) {
        const cursos =articulosCarrito.map ( curso =>{
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                 return curso;
            }else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    }else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();

    
}

//elimina el curso del carrito del dom
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        articulosCarritos = articulosCarritos.filter( curso => curso.id !== cursoId);
        
        carritoHTML();
    }
}



//Muestra el carrito de compras en el html

function carritoHTML(){

    //Limpar HTML
    vaciarCarrito();


    //Recorre el carrito y genera html
    articulosCarrito.forEach(curso =>{
        const { imagen, titulo, precio, cantidad, id } = curso;
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

function vaciarCarrito(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

    }
}

