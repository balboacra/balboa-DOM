/////////////////////////// GLOBAL ///////////////////////////

let carrito = []
const barraBuscar = document.getElementById("barraBusqueda");
let mainSec = document.querySelector(".SecMain");


/////////////////////////// CLASES ///////////////////////////

class Producto {
    constructor(idprod, nombre, categoria, precio, imagen) {
        this.idprod = idprod;
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
    }

}

/////////////////////////// OBJETOS ///////////////////////////

const productos = [];
productos.push(new Producto(1000, "Procesador Intel Core i3 12100", "CPU_Intel", 25000, "./img/Productos/Procesadores/i3.jpg"));
productos.push(new Producto(1001, "Procesador Intel Core i5 12400", "CPU_Intel", 38000, "./img/Productos/Procesadores/i5.jpg"));
productos.push(new Producto(1002, "Procesador Intel Core i7 12700K", "CPU_Intel", 70000, "./img/Productos/Procesadores/i7.jpg"));
productos.push(new Producto(1003, "Procesador Intel Core i9 12900k", "CPU_Intel", 100000, "./img/Productos/Procesadores/i9.jpg"));
productos.push(new Producto(2000, "Procesador AMD Ryzen 5 5600", "CPU_AMD", 32000, "./img/Productos/Procesadores/Ryzen5600.jpg"));
productos.push(new Producto(2001, "Procesador AMD Ryzen 7 5800x", "CPU_AMD", 55000, "./img/Productos/Procesadores/Ryzen5800x.jpg"));
productos.push(new Producto(2002, "Procesador AMD Ryzen 7 5800x3D", "CPU_AMD", 68000, "./img/Productos/Procesadores/Ryzen5800x3d.jpg"));
productos.push(new Producto(2003, "Procesador AMD Ryzen 9 5900x", "CPU_AMD", 90000, "./img/Productos/Procesadores/Ryzen5900x.jpg"));
productos.push(new Producto(2004, "Procesador AMD Ryzen 9 5950x", "CPU_AMD", 90000, "./img/Productos/Procesadores/Ryzen5950x.jpg"));
productos.push(new Producto(3000, "Placa de video Nvidia MSI RTX 3070TI", "GPU_Nvidia", 150000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3070TI.jpg"));
productos.push(new Producto(3001, "Placa de video Nvidia ZOTAC RTX 3070TI", "GPU_Nvidia", 150000, "./img/Productos/Placas/GPU_Nvidia_ZOTAC_RTX3070TI.jpg"));
productos.push(new Producto(3002, "Placa de video Nvidia ASUS RTX 3080TI", "GPU_Nvidia", 250000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3080ti.jpg"));
productos.push(new Producto(3003, "Placa de video Nvidia MSI RTX 3080TI", "GPU_Nvidia", 250000, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3080TI.jpg"));
productos.push(new Producto(3004, "Placa de video Nvidia ASUS RTX 3090", "GPU_Nvidia", 400000, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3090.jpg"));
productos.push(new Producto(3005, "Placa de video Nvidia MSI RTX 3090", "GPU_Nvidia", 400000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3090.jpg"));
productos.push(new Producto(4000, "Placa de video AMD Asrock RX6700XT", "GPU_AMD", 150000, "./img/Productos/Placas/GPU_AMD_Asrock_RX6700XT.jpg"));
productos.push(new Producto(4001, "Placa de video AMD ASUS RX6800XT", "GPU_AMD", 200000, "./img/Productos/Placas/GPU_AMD_ASUS_RX6800XT.jpg"));
productos.push(new Producto(4002, "Placa de video AMD Powercolor RX6900XT", "GPU_AMD", 400000, "./img/Productos/Placas/GPU_AMD_Powecolor_RX6900XT.jpg"));
productos.push(new Producto(4003, "Placa de video AMD XFX RX6900XT", "GPU_AMD", 400000, "./img/Productos/Placas/GPU_AMD_XFX_RX6900XT.jpg"));
productos.push(new Producto(5000, "Motherboard Intel Gigabyte Aorus Z690", "Mother_Intel", 100000, "./img/Productos/Motherboard/Mother_Intel_GigaZ690Aorus.jpg"));
productos.push(new Producto(5001, "Motherboard Intel MSI Unify Z690", "Mother_Intel", 110000, "./img/Productos/Motherboard/Mother_Intel_MSIZ690Unify.jpg"));
productos.push(new Producto(5002, "Motherboard Intel ASUS ROG Z690", "Mother_Intel", 130000, "./img/Productos/Motherboard/Mother_Intel_RogMaxZ690.jpg"));
productos.push(new Producto(6000, "Motherboard AMD MSI X570", "Mother_AMD", 100000, "./img/Productos/Motherboard/Mother_AMD_MSIX570SEdge.jpg"));
productos.push(new Producto(6001, "Motherboard AMD Gigabyte Aorus X570", "Mother_AMD", 110000, "./img/Productos/Motherboard/Mother_AMD_GigaX570SAorus.jpg"));
productos.push(new Producto(6002, "Motherboard AMD ASUS Crosshair X570", "Mother_AMD", 130000, "./img/Productos/Motherboard/Mother_AMD_AsusX570CrosshairVIII.jpg"));
productos.push(new Producto(7000, "Memoria RAM DDR4 Team 4gb 2400mhz", "RAM", 5000, "./img/Productos/RAM/RAMDDR4_Team4GB.jpg"));
productos.push(new Producto(7001, "Memoria RAM DDR4 ADATA 16gb 3200mhz", "RAM", 12000, "./img/Productos/RAM/RAMDDR4_ADATA16GB3200.jpg"));
productos.push(new Producto(7002, "Memoria RAM DDR4 ADATA 16gb 3600mhz", "RAM", 13500, "./img/Productos/RAM/RAMDDR4_ADATA16GB3600.jpg"));
productos.push(new Producto(7003, "Memoria RAM DDR5 Team 32gb 5600mhz", "RAM", 13500, "./img/Productos/RAM/RAMDDR5_Team32GB.jpg"));


//////////////////////////////// DOM ////////////////////////////////

mostrarProductos(productos);

/////////////////////////// FUNCIONES ///////////////////////////

// Mostrar el total de productos //

function mostrarProductos(listaProd) {

    mainSec.innerHTML = ""

    listaProd.forEach(el => {
        let contenedor = document.createElement("article");
        contenedor.classList.add('contProducto');
        contenedor.innerHTML = `
                            <img src=${el.imagen} alt=${el.nombre} class="imgProd">
                            <div class="contInfoProd">
                            <p class="nombreProd">${el.nombre}</p>
                            <p class="precioProd">$ ${el.precio}</p>
                            </div>
                            <div class="contInfoCompra">
                            <button type="button" class="btn-comprar" id="boton${el.idprod}">Comprar</button>
                            </div>
                            `;

        mainSec.appendChild(contenedor);

        let btnAgregar = document.getElementById(`boton${el.idprod}`);
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(el.idprod);
            btnAgregar.setAttribute('disabled', '');
            btnAgregar.innerHTML = "Agotado";
        })

    })

}

//////////////////////////////////////
/// Barra de busqueda de productos ///
//////////////////////////////////////

barraBuscar.addEventListener('input', () => {
    if (barraBuscar.value === '') {
        mostrarProductos(productos);
    } else {
        let prodFiltrados = productos.filter(elemento => elemento.nombre.includes(barraBuscar.value.toUpperCase()));
        mostrarProductos(prodFiltrados);
    }
})

////////////////////////////
/// Filtros por checkbox ///
////////////////////////////

let btnFiltro = document.getElementById("btn-filtrar");

function obtenerValoresCheckbox() {
    let valoresCheckbox = new Array();
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((elem) => {
        if (elem.checked) {
            valoresCheckbox.push(elem.value);
        }
    });
    return valoresCheckbox;
}

btnFiltro.onclick = (e) => {
    e.preventDefault();
    let seleccionados = obtenerValoresCheckbox();
    if (seleccionados.length == 0) {
        mostrarProductos(productos);
    } else {
        prodCheckeados = new Array();
        for (let i = 0; i < seleccionados.length; i++) {
            for (let p = 0; p < productos.length; p++) {
                if (seleccionados[i] == productos[p].categoria) {
                    prodCheckeados.push(productos[p]);
                }
            }
        }
        mostrarProductos(prodCheckeados);
    }
};

////////////////////////////
//// Carrito de compras ////
////////////////////////////

function agregarAlCarrito(id) {
    let productoAgregado = productos.find(obj => obj.idprod === id)
    carrito.push(productoAgregado);
    mostrarCarrito(productoAgregado);
    actualizarCarrito();
}

function mostrarCarrito(productoAgregado) {

    let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML = `<img src=${productoAgregado.imagen} alt=${productoAgregado.nombre} class="imgProdCarrito">
                    <p>${productoAgregado.nombre}</p>
                    <p>Precio: $${productoAgregado.precio}</p>
                    <button id="eliminar${productoAgregado.idprod}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    itemsCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregado.idprod}`)
    btnEliminar.addEventListener('click', () => {
        btnEliminar.parentElement.remove();
        carrito = carrito.filter(elemento => elemento.idprod !== productoAgregado.idprod)
        actualizarCarrito()
        let btnAgregar = document.getElementById(`boton${productoAgregado.idprod}`);
        btnAgregar.removeAttribute('disabled', '');
        btnAgregar.innerHTML = "Comprar";
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}

//////////////////////////
//// Finalizar compra ////
//////////////////////////

const btnFinalizar = document.getElementById('btn-finalizar');
const main = document.getElementById('main');
const productosComprados = document.getElementById('itemsCarrito');
const aside = document.getElementById('aside');

btnFinalizar.onclick = () => {
    productosComprados.innerHTML = ``;
    aside.innerHTML = ``;
    main.innerHTML = `<div class="contMensajeCompra">
                        <p class="mensajeCompra">Gracias, vuelva prontos</p>
                        <div>
                        `;
    carrito.length = 0;
    actualizarCarrito();
    contadorCarrito.innerText = '';
}

////////////////////////////////////////////////////
//// Ir al inicio cuando hay scrolling vertical ////
////////////////////////////////////////////////////

botonToTop = document.getElementById("toTop");

window.onscroll = function () { detectarScrollVertical() };
botonToTop.onclick = function () { irArriba() };

function detectarScrollVertical() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonToTop.style.display = "block";
    } else {
        botonToTop.style.display = "none";
    }
}

function irArriba() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}