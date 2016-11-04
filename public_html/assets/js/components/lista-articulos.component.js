function pintaArticulos() {

    var test = document.getElementById("test");
    for (var i = 0; i < mockArticulos.length; i++) {
        var a = mockArticulos[i];
        var articulo = new Articulo(a.id, a.nombre, a.descripcion, a.precio);
        test.innerHTML += articulo.mostrar();
        var articuloDiv = document.getElementById(articulo.id + "-boton");
    }
}

function anyadeEvento(elemento, articulo){
       elemento.addEventListener('click', function () {
           
            carritoActual.addToCart(articulo);
            console.log(carritoActual);
        });
}