import React from "react";

export default function WeatherForecastDay(props){

  function maxTemperature () {
    let tempetaure = Math.round(props.data.daily[0].temperature.maximum);
    return (
      `${tempetaure}°`
    )
  }

  function minTemperature () {
    let tempetaure = Math.round(props.data.daily[0].temperature.minimum);
    return (
      `${tempetaure}°`
    )
  }

  function day () {
    let date = new Date(props.data.daily[0].time*1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }


  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
        <div><img src={props.data.daily[0].condition.icon_url} alt={props.data.daily[0].condition.description} className="weatherForecast-icon"/></div>
        <div className="weatherForecast-temperature">
          <span className="weatherForecast-temperature-max">{maxTemperature()}</span>
          <span className="weatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  )

}