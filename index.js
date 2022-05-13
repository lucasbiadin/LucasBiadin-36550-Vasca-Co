import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./main.js";
import { eliminarProductoCarrito, pagar, vaciarCarrito } from "./carritoIndex.js";
// import { productos } from "./stock.js";

const contenedorCarrito = document.getElementById("carrito-contenedor");
let carritoStorage = [];

document.addEventListener("DOMContentLoaded", () => {

	mostrarProductos();

	if (localStorage.getItem("carrito")) {
		carritoStorage = JSON.parse(localStorage.getItem("carrito"));
		carritoStorage.map((producto) => {
			let div1 = document.createElement("div");
			div1.classList.add("productoEnCarrito");
			div1.innerHTML =
				` <div class="contenedor__img-mini-carrito">
					<img class="img-mini-carrito" src=${producto.img}>
				</div>
				<div class="contenedor__nombreYPrecio">
					<p class="producto__nombre">${producto.nombre}</p>
					<p class="producto__precio"> $${producto.precio}</p>
		  	</div>
		  	<p class="producto__cantidad" id="cantidad${producto.id}"> Cantidad: ${producto.cantidad}</p>
		  	<button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
			contenedorCarrito.appendChild(div1);
			actualizarCarrito(carritoStorage);
			eliminarProductoCarrito(producto.id)
			vaciarCarrito();
			pagar();
		})
	}
}) 
