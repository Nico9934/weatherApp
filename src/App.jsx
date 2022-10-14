import { useState } from 'react'
import './App.css'
import WeatherPanel from './components/WeatherPanel'



function App() {
  
const [backgroundApp, setBackgroundApp] = useState("")


  return (
    <div className="App ">
      <img className='fondo-app'
      src={backgroundApp}
      alt="" />
      <div className="container   mx-auto w-5/6 ">
        <h1 className='font-bold text-white uppercase text-center text-2xl mt-5 w-full'>Busca el clima de tu ciudad</h1>
          <div>
            <WeatherPanel
              setBackgroundApp={setBackgroundApp}
            />
          </div>
      </div>

    </div>
  )
}

export default App

