import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import Forecast from "./Forecast";

const Card = ({show, loading, weather, backgroundImage, forecast}) => {
    const [time, setTime] = useState("");

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    let actualDay;

    if (day < 10) {
        actualDay = `0${day}/${month}/${year}`;
    } else {
        actualDay = `${day}/${month}/${year}`;
    }

    const actualHour = `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            {show ? (
                <div className="container-app m-auto w-full md:w-9/12 rounded-md mt-10 mb-10">
                    <div className="h-auto gap-5 md:grid sm:flex grid-cols-5 ">
                        <div className="col-start-1 col-end-3">
                            <img
                                className="h-full object-cover"
                                src={backgroundImage}
                                alt=""
                            />
                        </div>
                        <div className="p-5 col-start-3 col-end-6">
                            {/* Datos ciudad */}
                            <div>
                                <h1 className="text-3xl w-full mb-1 first-letter:uppercase font-bold text-gray-500 text-center">
                                    {weather.name}
                                </h1>

                                <div className="flex mb-5">
                                    <div className="flex flex-col w-full justify-evenly sm:column">
                                        <p className="text-sm uppercase font-bold  text-gray-500">
                                            {actualDay}
                                        </p>
                                        <p className="text-sm uppercase font-bold  text-gray-500">
                                            {actualHour}
                                        </p>
                                        <p className="text-sm first-letter:uppercase  italic font-black  text-gray-600">
                                            {show &&
                                                weather.weather[0].description}
                                        </p>
                                    </div>

                                    <img
                                        className="p-2"
                                        src={
                                            show &&
                                            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                                        }
                                        alt="Icono del clima"
                                    />
                                </div>
                            </div>
                            {/* Datos Temperatura */}
                            <div className="">
                                <p className="uppercase font-semibold  md:mb-2 text-gray-500">
                                    Temperatura:{" "}
                                    <span className="font-bold text-xl">
                                        {(weather.main.temp - 273.15).toFixed(
                                            1
                                        )}
                                        °
                                    </span>{" "}
                                </p>
                                <p className="uppercase font-bold  md:mb-2 text-gray-500">
                                    Max:{" "}
                                    <span>
                                        {(
                                            weather.main.temp_max - 273.15
                                        ).toFixed(1)}
                                        °
                                    </span>
                                </p>
                                <p className="uppercase font-bold  md:mb-2 text-gray-500">
                                    Min:{" "}
                                    <span>
                                        {(
                                            weather.main.temp_min - 273.15
                                        ).toFixed(1)}
                                        °
                                    </span>
                                </p>
                            </div>

                            <Forecast forecast={forecast} />
                        </div>
                    </div>
                </div>
            ) : (
                <p className="md:mt-10 mt-5 text-center uppercase m-auto w-9/12 bg-slate-100 py-1 px-3 rounded-sm">
                    {" "}
                    No ingresaste ningún dato aún
                </p>
            )}
        </div>
    );
};

export default Card;

/* {target
    ? (
     

    )
    : (
    <p>Todavia no esta listo</p>
    )
} */
