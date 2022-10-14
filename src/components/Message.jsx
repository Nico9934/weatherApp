import React from 'react'

const Message = ({children}) => {
  return (
    <div
        className='mb-5 bg-red-700 w-1/2 m-auto p-3 rounded-xl text-center uppercase text-white mt-5 font-normal'
    >{children}</div>
  )
}

export default Message