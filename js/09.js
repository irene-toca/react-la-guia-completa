//Operaciones en los areglos o array

const tecnologias = ['HTML', 'CSS','javaScript', 'React',
'Node.js']

//Añadir elementos al array
//tecnologias.push('GraphQL')// añade al final del array
//tecnologias.unshift('GraphQL') //añade al principio del array

//const nuevoArreglo =[...tecnologias, 'GraphQL']//añade al final del array
//const nuevoArreglo =['GraphQL',...tecnologias] //añade al final del array


//Eliminar elementos del array
//tecnologias.pop() //Elimina del final del array
//tecnologias.shift() //Elimina del inicio del array
//tecnologias.splice(2, 1)//Elimina el array de una pocicion que yo quiera 

/*const nuevoArray = tecnologias.filter(function(tech){
    //return tech !== 'HTML'
     //return tech === 'React'

})*/


//Remplazar o modificar de array

//tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function(tech){
   if(tech === 'HTML'){
    return 'GraphQL'
   }else{
    return tech
   }
})

console.table(tecnologias)
console.table(nuevoArray)

