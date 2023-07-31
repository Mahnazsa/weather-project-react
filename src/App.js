import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Paris"/>
      <div className="footer">
        This project was coded by <a href='https://roaring-sunburst-5cc45d.netlify.app/' target='-blank'>Mahnaz Safavi</a> and is <a href='https://github.com/Mahnazsa/weather-project-react'target='-blank'>open-sourced on GitHub</a>
      </div>
      
    </div>
    </div>
  );
}

export default App;
