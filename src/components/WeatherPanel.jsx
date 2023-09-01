import React, {useEffect, useState} from "react";
import Form from "./Form";
import Card from "./Card";
import Message from "./Message";
import Forecast from "./Forecast";

const WeatherPanel = ({setBackgroundApp}) => {
    // Clima actual
    const [weather, setWeather] = useState([]);
    // Pronostico para proximas horas
    const [forecast, setForecast] = useState([]);
    // Spinner de carga mientras llega la respuesta de la API
    const [loading, setLoading] = useState(false);
    // Tarjeta visible o no, con los datos del Clima
    const [show, setShow] = useState(false);
    //Variable para validad si la ciudad existe o no
    const [cityOk, setCityOk] = useState(true);
    //Variable para imagen de fondo
    const [backgroundImage, setBackgroundImage] = useState("");

    const getLocation = async (city) => {
        setLoading(true);
        setShow(false);

        try {
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1ae368108e49a561a3f9eb7fef6fac5&lang=es`;
            await fetch(urlWeather)
                .then((respuesta) => respuesta.json())
                .then((resultado) => {
                    if (resultado.cod === 200) {
                        setCityOk(true);
                        setWeather(resultado);
                    } else {
                        setCityOk(false);
                    }
                });

            const urlPixaBay = `https://pixabay.com/api/?key=25603168-f2ed363edb05d08bb4418e66c&q=${city}&image_type=photo&category=travel&min_width=5000&min_heigth=3000`;
            await fetch(urlPixaBay)
                .then((respuesta) => respuesta.json())
                .then((resultado) => {
                    if (resultado.hits[0] === undefined) {
                        setBackgroundImage(
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cumulonimbo_SE_de_Caracas.jpg/600px-Cumulonimbo_SE_de_Caracas.jpg"
                        );
                    } else {
                        setBackgroundImage(resultado.hits[2].largeImageURL);
                        setBackgroundApp(resultado.hits[0].largeImageURL);
                    }
                });

            // Forecast
            const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c1ae368108e49a561a3f9eb7fef6fac5&lang=es`;
            const respuestaForecast = await fetch(urlForecast);
            const dataForecast = await respuestaForecast.json();

            setForecast(dataForecast);
            setShow(true);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Form getLocation={getLocation} show={show} />

            {!cityOk ? (
                <Message>No se ha encontrado la ciudad</Message>
            ) : (
                <>
                    <Card
                        loading={loading}
                        show={show}
                        weather={weather}
                        backgroundImage={backgroundImage}
                        forecast={forecast}
                        setForecast={setForecast}
                    />
                </>
            )}
        </div>
    );
};

export default WeatherPanel;

// const responseWeather = await fetch(urlWeather);
// const dataWeather = await responseWeather.json();

// Sintaxis FetchApi
// const url = ""
//   fetch(url)
//     .then( respuesta => {
//       return respuesta.json()
//     })
//     .then( datos => console.log(datos))

// const url = "";
// fetch(url)
//   .then( respuesta => respuesta.json())
//   .then( resultado => console.log(resultado))

// setWeather(dataWeather);

// 0 = UNSET, NO SE HA LLAMADO AL METODO OPEN
// 1 = OPENED, se ha llamado al metodo open
// 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
// 3 = LOADING, está cargando, es decir, esta recibiendo la respuesta
// 4 = DONE, se ha completado la operacion
