
// Comparación y Operador Estrictocon

const numero1 = 30
const numero2 = "20"

/*
==(Comparacin pero no es estricto)
=== (Comparación estricta- Revisa valor y tipo de Dato )
*/

console.log(typeof numero1)
console.log(typeof numero2)


if(numero1 === (numero2)){

    console.log('Si!, son iguales')
} else{
    console.log('No,no son iguales')
}

const autenticado = true

if(autenticado){
    console.log('Si esta autenticado')
}

