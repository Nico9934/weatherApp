import React from "react";

const Forecast = ({ forecast, setForecast }) => {
  const forecastData = forecast.list.map((datos) => {
    const date = datos.dt_txt.slice(datos.dt_txt.length - 8);
    return {
      temp: (datos.main.temp - 273.15).toFixed(1),
      // min: (datos.main.temp_min - 273.15).toFixed(1),
      // max: (datos.main.temp_max - 273.15).toFixed(1),
      description: datos.weather[0].description,
      time: date.substr(0, date.length - 3),
      icono: datos.weather[0].icon,
      key: Math.random()
    };
  });

  return (
    <div className="flex w-full flex-row">
        {forecastData.map((dato) => {
          const { temp, description, time, icono } = dato 
          return (  
            <div className="bg-gray-400 mr-1 w-20 p-5 flex flex-col justify-center">
              <img className="min-w-5 min-h-5 m-0" src={`http://openweathermap.org/img/wn/${icono}@2x.png`}></img>
              <p>{time}</p>
              <div className="flex flex-col">
                  <p>{temp}</p>
                  <p className="font-italic uppercase text-xs">{description}</p>
              </div>
            </div>
            )
        })}
    </div>
  );
};

export default Forecast;
