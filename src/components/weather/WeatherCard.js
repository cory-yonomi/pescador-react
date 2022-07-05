import React from 'react'
import styles from './Weather.module.css'

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
            <div className={styles.weatherCard}>
                <div className={styles.weatherCardTitle}>
                    <h4>Current</h4>
                </div>
                <div className={styles.weatherCardBody}>
                    <div className={styles.weatherCardBodyLeft}>
                        <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`} alt="Current weather icon" />
                        <h5>{weather.current.weather[0].main}</h5>
                        <p>{Math.round(weather.current.temp)}°</p>
                    </div>
                    <div className={styles.weatherCardBodyRight}>
                        <p>{weather.current.pressure} hPa</p>
                        <p>{weather.current.wind_speed}mph @ {direction} {weather.current.wind_deg}°</p>
                    </div>
                </div>  
            </div>
        )

    } else if(period === 'hourly'){

        let direction = windDirection(weather.hourly[3].wind_deg)

        return (
            // <div>
            //     <h4>3hr Forecast</h4>
            //     <img src={`http://openweathermap.org/img/wn/${weather.hourly[3].weather[0].icon}.png`} alt="Forecast weather icon" />
            //     <h5>{weather.hourly[3].weather[0].main}</h5>
            //     <p>{Math.round(weather.hourly[3].temp)}°</p>
            //     <p>{weather.hourly[3].pressure} hPa</p>
            //     <p>{weather.hourly[3].wind_speed}mph @ {direction} {weather.current.wind_deg}°</p>
            // </div>
            <div className={styles.weatherCard}>
                <div className={styles.weatherCardTitle}>
                    <h4>3 HR Forecast</h4>
                </div>
                <div className={styles.weatherCardBody}>
                    <div className={styles.weatherCardBodyLeft}>
                        <img src={`http://openweathermap.org/img/wn/${weather.hourly[3].weather[0].icon}.png`} alt="Forecast weather icon" />
                        <h5>{weather.hourly[3].weather[0].main}</h5>
                        <p>{Math.round(weather.hourly[3].temp)}°</p>
                    </div>
                    <div className={styles.weatherCardBodyRight}>
                        <p>{weather.hourly[3].pressure} hPa</p>
                        <p>{weather.hourly[3].wind_speed}mph @ {direction} {weather.hourly[3].wind_deg}°</p>
                    </div>
                </div>  
            </div>
        )
    }

    
}

export default WeatherCard
