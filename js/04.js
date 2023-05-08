// Objetos ( asi se crea un objeto)

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}
 console.log(producto)
 console.table(producto)

 console.log(producto.nombre)
 console.log(producto.precio)
 console.log(producto.disponible)

//Destructuring (sirve para sacr valores y crear variavles de un objeto)

const { nombre, precio, disponible } = producto

console.log( nombre);
console.log( precio);
console.log( disponible );

//Object literal Enhacement (sirve para colocarlos dentro de un objeto)

const autenticado = true
const usuario = "Ire"

const nuevoObjeto = {
    autenticado,
    usuario 
}
console.table(nuevoObjeto)