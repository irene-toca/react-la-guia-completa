// Objetos- Manipulacion 

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}


Object.freeze(producto) //nadie pueda modificar las propiedades




 //Object.seal(producto) puedes rescribir las propiedades pero no te permite //añadirlas o borrarlas



// Reescribir un valor
producto.nombre = "Monitor curbo"

//Si no existe, lo va a añadir nuevas propiedades
producto.imagen = " imagen.jpg"

//elimina las  propiedades ya existentes
delete producto.disponible


console.table(producto)