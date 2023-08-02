import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
  const {iconUrl, description, coordinates} = props;

  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);

  function handleResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);

  }

  useEffect(() => {
    let apiKey = "4c50413a6ac362tb2b6od01fb33f6e87";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);

    return (
      <div className="weatherForecast">
      <div className="row">
        {forecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    </div>
    )
  } else {
  return null;

  }
}