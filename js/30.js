//Fetch API - Async Await
const url = "https://jsonplaceholder.typicode.com/comments"

/*const consultarAPI = () => {
    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((resultado) => {
            resultado.forEach(comentario => {
                console.log(comentario)

            })

        })

}
consultarAPI();*/



const consultarAPI = async () => {
    const respuesta = await fetch(url)
   
    const resultado = await respuesta.json()
       
}
consultarAPI();