    function Articulo(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    Articulo.prototype.mostrar = function () {
        return this.id + " " + this.nombre + " " + this.descripcion + " " + this.precio;
    }