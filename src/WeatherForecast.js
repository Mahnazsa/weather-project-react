import React from "react";
import { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
  const {iconUrl, description, coordinates} = props;

  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);

  function handleResponse (response) {
    setForecast(response.data);
    setLoaded(true);

  }

  

  if (loaded) {
    console.log(forecast);

    return (
      <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast.daily[0]} />
        </div>

        <div className="col">
          <WeatherForecastDay data={forecast.daily[1]} />
        </div>

        <div className="col">
          <WeatherForecastDay data={forecast.daily[2]} />
        </div>

        <div className="col">
          <WeatherForecastDay data={forecast.daily[3]} />
        </div>

        <div className="col">
          <WeatherForecastDay data={forecast.daily[4]} />
        </div>

      </div>
    </div>
    )
  } else {
      const apiKey = "4c50413a6ac362tb2b6od01fb33f6e87"; 
      const { latitude, longitude } = coordinates;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then((handleResponse), [coordinates]);

  return null;

  }
}