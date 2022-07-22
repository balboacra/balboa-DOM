let carritoCompras
const carritoEnStorage = JSON.parse(localStorage.getItem("carritoCompras")) || [];
console.log(carritoEnStorage);

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('contenedor-carrito');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precio-total');

mostrarProductos()

carritoEnStorage ? carritoCompras = carritoEnStorage : carritoCompras = [];

function mostrarProductos() {

    productos.forEach(el => {
        let div = document.createElement(`div`)
        div.className = "card"
        div.innerHTML = `<img src="${el.img}" class="card-img-top shadow-lg" alt="...">
                            <div class="card-body">
                                <div class="col">
                                    <div class="card mb-4 rounded-3 shadow-sm">
                                        <div class="card-header py-3">
                                            <h4 class="my-0 fw-normal">${el.estilo}</h4>
                                        </div>
                                    <div class="card-body">
                                        <h1 class="card-title pricing-card-title">$${el.precio}<small class="text-muted fw-light">/${el.pack}</small></h1>
                                        <button id="boton${el.id}" type="button" class="w-100 btn btn-lg btn-outline-primary">Agregar al
                                        carrito</button>
                                </div>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener(`click`, () => {
            agregarAlCarrito(el.id);
            Toastify({
                text: "Has agregado un producto al carrito",
                duration: 2000,
            }).showToast();
        })
    })
}


function agregarAlCarrito(id) {

    let productoAgregar = productos.find(item => item.id === id)
    carritoCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras))
}


function mostrarCarrito(productoAgregar) {

    let div = document.createElement(`div`)
    div.setAttribute(`class`, `productoEnCarrito`)
    div.innerHTML = `<div class="container d-flex justify-content-between shadow-sm">
                        <p class="mx-3 pt-3">- ${productoAgregar.pack} de ${productoAgregar.estilo}</p>
                        <p class="mx-3 pt-3">- Precio: $${productoAgregar.precio}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar btn mx-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </button>
                    </div>`

    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener(`click`, () => {
        Toastify({
            text: "Has eliminado un producto del carrito",
            duration: 2000,
        }).showToast();
        btnEliminar.parentElement.remove()
        carritoCompras = carritoCompras.filter(elemento => elemento.id !== productoAgregar.id)
        carritoCompras = localStorage.removeItem(productoAgregar.id)
        actualizarCarrito()
    })
}


function actualizarCarrito() {
    contadorCarrito.innerText = carritoCompras.length
    precioTotal.innerText = carritoCompras.reduce((acc, el) => acc + el.precio, 0);
}


console.log(carritoCompras);