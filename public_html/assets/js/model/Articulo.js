    function Articulo(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    Articulo.prototype.mostrar = function () {
        return "<div class='articulo' id=" + this.id + "><b>ID:</b> " + this.id + "<br> <b>NOMBRE:</b> <span id='" + this.id + '-nombre'+"'>" + this.nombre + "</span><br> <b>DESCRIPCION:</b> <span id='"+this.id + '-descripcion'+"'>" + this.descripcion + "</span><br> <b>PRECIO:</b> <span id='" + this.id + '-precio'+"'>" + this.precio + "</span><br><button id=" + this.id + '-boton'+">Añadir al carrito</button><br></div>";
    }