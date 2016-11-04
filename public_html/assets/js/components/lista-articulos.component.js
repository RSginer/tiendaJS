function pintaArticulos() {

    var test = document.getElementById("test");
    for (var i = 0; i < mockArticulos.length; i++) {
        var a = mockArticulos[i];
        var articulo = new Articulo(a.id, a.nombre, a.descripcion, a.precio);
        test.innerHTML += articulo.mostrar();
        var articuloDiv = document.getElementById(articulo.id + "-boton");
    }
}

function anyadeEvento(elemento, articulo) {
    elemento.addEventListener('click', function () {

        carritoActual.addToCart(articulo);
        console.log(carritoActual);
    });
}
function cargarEventos() {
    for (var i = 0; i < articulos.length; i++) {
        var div = articulos[i];
        var boton = document.getElementById(div.id + "-boton");
        var articulo = new Articulo(
                div.id,
                document.getElementById(div.id + "-nombre").firstChild.data,
                document.getElementById(div.id + "-descripcion").firstChild.data,
                document.getElementById(div.id + "-precio").firstChild.data
                );
        anyadeEvento(boton, articulo);
    }
}
