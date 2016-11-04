function Carrito(fecha, cliente,articulos,total){
    this.fecha = fecha;
    this.cliente = cliente;
    this.articulos = articulos;
    this.total = total;
};

Carrito.prototype.addToCart=function(articulo){
    if (this.articulos.length === 0) {
        this.articulos=[articulo];
    }else{
        this.articulos.push(articulo);
    }
};
