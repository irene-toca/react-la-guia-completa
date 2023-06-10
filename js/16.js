


const tecnologias = ['HTML', 'CSS','javaScript', 'React',
'Node.js']

const numeros = [10,20,30]

let nuevoArray;

// Filter
 nuevoArray = tecnologias.filter( tech => tech !== 'React')

 //includes: Comprueba si un elemento exite en el array
 //const resultado =tecnologias.includes ('GraphQL')


 //Some -Devuelve si al menos uno cumple la condición
 //const resultado = numeros.some ( numero => numero > 15)


 //Find- Devuelve el primer elemento quw cumpla la condición 
 //const resultado = numeros.find( numero => numero > 15)


 //Every- Retorna true  o false si todos cumplen la condición
 //const resultado = numeros.every ( numero => numero > 9)



 //Reduce- Acumula en el total
 // const resultado = numeros.reduce ( (total, numero ) => numero + total, 0 )


 //Filter - Crea un nuevo array en base a una condición
 //const resultado = tecnologias.filter( tech => tech === 'Node.js')
 //const resultado = numeros.filter( numero => numero !== 10)


  tecnologias.forEach((tech, index) => console.log( index, tech) )
 
 //Crea un nuevo array
 const arrayMap = tecnologias.map(tech => tech)
 console.log(arrayMap)
 

