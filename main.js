import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";



/**
 * Crea un div para cada producto y agrega un detector de eventos al botón de cada div.
 */
export const mostrarProductos = async () => {
 /* Obtener los datos de la API y almacenarlos en la variable productos. */
  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await getData();

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML +=
      ` <div class="card-image">
        <img src=${producto.img}>
        <div class="contenedor-botonYtituloProducto">
          <span class="nombre-producto">${producto.nombre}</span>
          <a class="btn-floating waves-effect waves-light boton-agregar" id=boton${producto.id}><i class="boton-agregar material-icons">add_shopping_cart</i></a>
        </div>
      </div>
      <div class="card-content">
        <p>${producto.desc}</p>
        <p>$${producto.precio}</p>
      </div>
    `;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);
      Toastify({
        text: `${producto.nombre} se agrego al carrito`,
        duration: 2000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#000",
          color: "#fff"
        }
      }).showToast();
    })
  });
};
