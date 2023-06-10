// Unir 2 objetos o +

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: "Ire",
    premium: true
}

//cons nuevoObjeto = =bjeto.assign(producto cliente )// no

const nuevoObjeto2 = {
    producto:{...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)

