import React from 'react';
import { WiDaySunny, WiNightClear, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'weather-icons-react';

const WeatherInfo = ({weather}) =>{
    const {
    main, weather: weatherDetails
    } = weather;

    const getWeatherIcon = (condition) => {
        switch (condition) {
          case 'Clear':
            return <WiDaySunny size={50} />;
          case 'Clouds':
            return <WiCloudy size={50} />;
          case 'Rain':
            return <WiRain size={50} />;
          case 'Snow':
            return <WiSnow size={50} />;
          case 'Thunderstorm':
            return <WiThunderstorm size={50} />;
          default:
            return null;
        }
      };

      const getBackgroundColor = (condition) => {
        switch (condition) {
          case 'Clear':
            return '#ffcc00'; // Yellow for clear skies
          case 'Clouds':
            return '#99aabb'; // Gray for cloudy conditions
          case 'Rain':
            return '#3366cc'; // Blue for rain
          case 'Snow':
            return '#ffffff'; // White for snow
          case 'Thunderstorm':
            return '#333333'; // Dark gray for thunderstorms
          default:
            return '#f0f0f0'; // Default background color
        }
      };
    
      const backgroundColor = getBackgroundColor(weatherDetails[0].main);
      return (
        <div className="card mt-4" style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s' }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ color: '#007bff' }}>Weather Information</h2>
            <div className="text-center mb-3">
              {getWeatherIcon(weatherDetails[0].main)}
            </div>
            <p className="card-text">Temperature: {main.temp} °C</p>
            {/* Add more details as needed */}
          </div>
        </div>
      );
};
export default WeatherInfo;
