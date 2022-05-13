const contadorCarrito = document.getElementById("contador-carrito");
const precioTotal = document.getElementById("precioTotal");


export const actualizarCarrito = (carritoDeCompras) => {

    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad),0);

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

    const btnVaciarCarrito = document.getElementById('vaciar-carrito');
    const btnPagarCarrito = document.getElementById('boton-pagar');
    if(carritoDeCompras.length > 0){
        btnVaciarCarrito.style.display = '';
        btnPagarCarrito.style.display = '';
    }
    else {
        btnVaciarCarrito.style.display = 'none';
        btnPagarCarrito.style.display = 'none';
    }
}