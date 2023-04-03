import React, { useEffect } from 'react'

const ApiDoc = () => {

  // con Promises
  const consultarApis =  () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(respuesta => respuesta.json())
      .then(resultado => resultado)
  }
  consultarApis()

  // con Async Await
  
  useEffect( () => {

    const consultarApis2 = async () => {
      const respuesta =  await fetch("https://jsonplaceholder.typicode.com/todos")
      const resultado =  await respuesta.json()
      
      console.log(resultado)
      // resultado.map ( comentario => {
        //   console.log(comentario.userId)
        // })
      }
      consultarApis2()
    }, [])


  


  return (
    <div>Como consumir una api con Async Await</div>
  )
}

export default ApiDoc