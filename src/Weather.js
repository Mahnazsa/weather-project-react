import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import LoadingContainer from "./LoadingContainer";


export default function Weather (props) {
  const [ready, setReady] = useState (false);
  const [city, setCity] = useState (props.defaultCity)
  const [weatherData, setWeatherData] = useState ({});

  function handleResponse (response) {
    console.log(response.data)
    
    setWeatherData ({
      city: response.data.city,
      date: new Date(response.data.time*1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature["feels_like"],
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,

    })
    
    setReady (true);
  }
  

  function search() {
    const apiKey = "4c50413a6ac362tb2b6od01fb33f6e87";
    
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault() ;
    search();

  }

  function handleCityChange (event) {
    setCity(event.target.value);

  }


  if (ready) {
    return (
    <div className="Weather">
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="row mt-3">
          <div className="col-9">
            <input type="search" placeholder="Enter a City ..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
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
    search ();
    return (<LoadingContainer />) 
  }
}