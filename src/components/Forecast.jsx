import React from "react";

const Forecast = ({ forecast, setForecast }) => {
  const forecastData = forecast.list.map((datos, index) => {
    const date = datos.dt_txt.slice(datos.dt_txt.length - 8);
    return {
      temp: (datos.main.temp - 273.15).toFixed(1),
      description: datos.weather[0].description,
      time: date.substr(0, date.length - 3),
      icono: datos.weather[0].icon,
    };
  });
  const primerosResultados = forecastData.slice(1, 5);

  return (
    <>
      <h1 className="text-center font-bold uppercase text-xl text-gray-500 mt-10">
      Próximas horas
      </h1>
      <div className="flex w-full flex-col md:flex-row md:min-w-fit">
     
      {primerosResultados.map((dato) => {
        const { temp, description, time, icono } = dato;
        const key = Math.random();

        return (
            <div className="md:mr-1 w-full md:w-20 flex h-auto mt-2 flex-row md:flex-col justify-around md:justify-center md:m-auto">
              <img
                className="w-10 h-10 m-0 md:m-auto"
                src={`http://openweathermap.org/img/wn/${icono}@2x.png`}
              ></img>
              <div className="flex flex-col justify-around text-center">
                <p className="text-gray-500 font-bold text-xs">{time} HS</p>
                <p className="text-gray-500 font-bold text-xs">{temp}°</p>
                <p className="text-gray-500 font-bold first-letter:uppercase text-xs">
                  {description}
                </p>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Forecast;
