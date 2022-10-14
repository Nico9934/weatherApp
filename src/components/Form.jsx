import React, { useState } from 'react'
import Message from './Message'

const Form = ({getLocation, show}) => {

    const [city, setCity] = useState("")
    const [error, setError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (city === "") {
            setError(true)
            return
        }
        setError(false)
        getLocation(city)
        setCity("")
    }

    return (
        <>
           
            <form
                onSubmit={onSubmit}
                className='w-full flex flex-col md:flex-row mt-5 md:mt-10  gap-2'>

                <input type="text"
                    className='uppercase text-center py-1 px-3 rounded-sm mx-auto w-3/4 font-semibold text-gray-600'
                    onChange={(e) => setCity(e.target.value)}
                    value={city} />
                <input
                    className='mt-5 md:my-0 rounded-sm bg-green-500 hover:bg-green-700 cursor-pointer text-white uppercase py-1 px-3
                    sm: w-2/3
                    md:w-1/4 m-auto font-semibold'
                    type="submit"
                    value={show ?  "Busca otra ciudad" : "Agrega una ciudad" }
                />
            </form>

            {error && <Message>Debes completar el campo</Message>}

            
        </>
    )
}

export default Form