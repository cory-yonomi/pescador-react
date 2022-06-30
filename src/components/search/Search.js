import React, { useState, useEffect } from 'react'
import SearchComponent from './SearchComponent'
import Results from './Results'
import styles from './Search.module.css'

const Search = () => {
    
    const [weather, setWeather] = useState(null)
    const [stations, setStations] = useState(null)
    const [loading, setLoading] = useState(false)
    const [position, setPosition] = useState([])

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                setPosition([pos.coords.latitude, pos.coords.latitude])
            },
            function(error) {
                setPosition(null)
            }
        )
    }, [])

    return (
        <div  className={styles.Search}>
            {!position && <SearchComponent  
                                setWeather={setWeather} 
                                setLoading={setLoading} 
                                setStations={setStations}
                            />}
            {!loading && weather ? <Results stations={stations}
                                        weather={weather} 
                                        loading={loading} 
                                        /> : null}
        </div>)
}

export default Search
