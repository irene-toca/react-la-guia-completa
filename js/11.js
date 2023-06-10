// Iteradores en js

const tecnologias = ['HTML', 'CSS','javaScript', 'React','Node.js']

//forEach - Acceder a cada elemento del array
const arrayForeach = tecnologias.forEach(function(tech){
   return tech
})

//Crea un nuevo array
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)