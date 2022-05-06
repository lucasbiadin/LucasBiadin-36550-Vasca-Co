import { productos } from "./stock.js";
import { actualizarCarrito } from "./actualizarCarrito.js";

const contenedorCarrito = document.getElementById("carrito-contenedor");
let carritoDeCompras = [];

export const carritoIndex = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
  }
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
  contarProductosRepetidos(productoRepetido, productoId);
  eliminarProductoCarrito(productoId)
}


export const eliminarProductoCarrito = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
  }
  let botonEliminar = document.getElementById(`eliminar${productoId}`);
  botonEliminar.addEventListener("click", () => {

    swal({
      icon: "warning",
      title:"¿Esta seguro que quiere eliminar este producto?",
      buttons:true,
      dangerMode: true
    }).then((result)=>{
      if(result){
        botonEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
        actualizarCarrito(carritoDeCompras);
      }
    })
  })
}

const contarProductosRepetidos = (prodRepetido, productoId) => {
  if (prodRepetido) {
    prodRepetido.cantidad++
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    renderProductosCarrito(productoId);
  }
}

const renderProductosCarrito = (productoId) => {
  let producto = productos.find(producto => producto.id == productoId);
  carritoDeCompras.push(producto);
  producto.cantidad = 1;
  let div = document.createElement("div");
  div.classList.add("productoEnCarrito");
  div.innerHTML =
    ` <div class="contenedor__img-mini-carrito">
        <img class="img-mini-carrito" src=${producto.img}>
      </div>
      <div class="contenedor__nombreYPrecio">
        <p class="producto__nombre">${producto.nombre}</p>
        <p class="producto__precio"> $${producto.precio}</p>
      </div>
      <p class="producto__cantidad" id="cantidad${producto.id}"> Cantidad: ${producto.cantidad}</p>
      <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;
  contenedorCarrito.appendChild(div);
  actualizarCarrito(carritoDeCompras);
}



