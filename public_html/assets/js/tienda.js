var carritoActual;
var articulos = document.getElementsByClassName("articulo");
window.onload = function () {
    carritoActual = new Carrito(new Date(),1,[],0);
    pintaArticulos();
    for (var i = 0; i < articulos.length; i++) {
       var div = articulos[i];
       var boton = document.getElementById(div.id+"-boton");
       var articulo = new Articulo(
                                div.id,
                            document.getElementById(div.id + "-nombre").firstChild.data,
                            document.getElementById(div.id + "-descripcion").firstChild.data,
                            document.getElementById(div.id + "-precio").firstChild.data
                            );
       anyadeEvento(boton, articulo);
    }
    
}