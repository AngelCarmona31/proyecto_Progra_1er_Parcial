const products = require("./data/products");
const users = require("./data/users");
const userConf = require("./data/userconf");

const calcularTotalPedido =(pedido)=>{
     let total;
    if (!pedido){
        return"EL pedido esta vacio";
    }
    for (let index = 0; index < pedido.length; index++) {
        const id = pedido[index].id;
        const cantidad= pedido[index].cantidad;
        
        if (cantidad<=0) {
            return "Cantidad inválida para el producto ID";           
        }
        const product =products.find((p)=> p.id === id);
        if (!product) {
            return"Producto no encontrado: "+id;
            
        }
        total += product.price *cantidad;
    }
    return total;
}
const crearCatalogoDescuento= (limite, porsentaje)=> {
    const newProducts = products.filter(p.price<=limite);
    
}
calcularTotalPedido(pedido)
calcularTotalPedido([
  { productId: 2, cantidad: 2 },
  { productId: 4, cantidad: 1 },
]);
// 4197

calcularTotalPedido([{ productId: 2, cantidad: 0 }]);
// "Cantidad inválida para el producto 2"

calcularTotalPedido([{ productId: 99, cantidad: 1 }]);
// "Producto 99 no encontrado"
