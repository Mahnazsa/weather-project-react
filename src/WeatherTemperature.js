import React from "react";
import { useState } from "react";

export default function WeatherTemperature (props) {
  const [unit, setUnit] = useState("celsius");

  function convertTofahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius (event){
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span> 
        <span className="unit">°C | <a href="#" onClick={convertTofahrenheit}>°F </a></span>
      </div>
    )
  }
  else {
    return(
      <div>
        <span className="temperature">{Math.round(props.celsius * 9/5 +32)}</span> 
        <span className="unit"> <a href="#" onClick={convertToCelsius}>°C </a> | °F </span>
      </div>
    )
  }

}