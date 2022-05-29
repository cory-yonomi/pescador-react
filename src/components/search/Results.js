import React from 'react'
import StationList from '../stations/StationList'
import WeatherCard from '../weather/WeatherCard'
import classes from './Search.module.css'

const Results = ({loading, weather, stations}) => {
    return (
        <div className={classes.Results}>
            <div className={classes.weatherDisplay}>
                {!loading && <WeatherCard weather={weather} loading={loading} period='current' />}
                {!loading && <WeatherCard weather={weather} loading={loading} period='hourly' />}
            </div>
            <StationList loading={loading} stations={stations} source='search'/>
        </div>
    )
}

export default Results;
