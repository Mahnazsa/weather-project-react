import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import {ThreeDots} from  'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";



export default function Weather () {
  const [ready, setReady] = useState (false);
  const [weatherData, setWeatherData] = useState ({});

  function handleResponse (response) {
    
    setWeatherData ({
      city: response.data.city,
      date: new Date(response.data.time*1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature["feels_like"],
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

    })
    
    setReady (true);
  }

  if (ready) {
    return (
    <div className="Weather">
      <form className="mt-3">
        <div className="row mt-3">
          <div className="col-9">
            <input type="search" placeholder="Enter a City ..." className="form-control" autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />

    </div>
  )
  } else {
    const apiKey = "4c50413a6ac362tb2b6od01fb33f6e87";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading-container">      
        <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#0D6AF4" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )
  }
  
}