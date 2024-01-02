import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputForm from './Components/InputForm';
import WeatherInfo from './Components/WeatherInfo';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  //handle form submission an API request
  const handleFormSubmit = async (location) => {

    try{
      //api data
      const apiKey = "a384a14bb86f2c7d59727567ac0422a5";
      
      
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);


      if(!response.ok) { 
        throw new Error('Weather data not available. Please check the location and try again.');
      }
    

    const data = await response.json();
    setWeatherData(data);
    setError(null);

    }
    catch(error){
      setWeatherData(null);
      setError(error.message);
    }

  

  //calling API and updating the state with the weather data
};

return (
  <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
    <h1 className="text-center mb-4" style={{ color: '#333' }}>Weather App</h1>
    <InputForm onFormSubmit = {handleFormSubmit}/>
    {error && <p className="text-danger mt-3" style={{ color: 'red'}}>{error}</p>}
      <div>
        <h2>Weather Information</h2>
        {weatherData && <WeatherInfo weather={weatherData} />}
        </div>




  </div>
);
};

export default App;
