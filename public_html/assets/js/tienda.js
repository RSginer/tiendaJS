var carritoActual;
var articulos = document.getElementsByClassName("articulo");
window.onload = function () {
    carritoActual = new Carrito(new Date(),1,[],0);
    pintaArticulos();
    cargarEventos();
    
}