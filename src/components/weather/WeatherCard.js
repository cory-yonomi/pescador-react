import React from "react"

const WeatherCard = ({ weather, period }) => {

    // convert the wind degree measurement into a cardinal direction
    function windDirection(deg) {
        const val = Math.floor((deg / 22.5) + 0.5)
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
        return arr[(val % 16)]
    }

    

    if(period === 'current'){

        let direction = windDirection(weather.current.wind_deg)
        
        return (
            <div>
                <h4>Current</h4>
                <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`} alt="Current weather icon" />
                <h5>{weather.current.weather[0].main}</h5>
                <p>{weather.current.temp}</p>
                <p>{weather.current.pressure} hPa</p>
                <p>{weather.current.wind_speed} @ {direction} {weather.current.wind_deg}°</p>
            </div>
        )

    } else if(period === 'hourly'){

        let direction = windDirection(weather.hourly[3].wind_deg)

        return (
            <div>
                <h4>3hr Forecast</h4>
                <img src={`http://openweathermap.org/img/wn/${weather.hourly[3].weather[0].icon}.png`} alt="Forecast weather icon" />
                <h5>{weather.hourly[3].weather[0].main}</h5>
                <p>{weather.hourly[3].temp}</p>
                <p>{weather.hourly[3].pressure} hPa</p>
                <p>{weather.hourly[3].wind_speed} @ {direction} {weather.current.wind_deg}°</p>
            </div>
        )
    }

    
}

export default WeatherCard
