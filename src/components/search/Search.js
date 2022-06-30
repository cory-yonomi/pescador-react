import React, { useState, useEffect, useContext } from 'react'
import SearchComponent from './SearchComponent'

import Results from './Results'
import StationMap from '../maps/StationMap'
import styles from './Search.module.css'
import getGeolocation from '../../lib/getGeolocation'
import axios from 'axios'
import Station from '../stations/Station'

const Search = () => {

    const [weather, setWeather] = useState(null)
    const [stations, setStations] = useState(null)
    const [loading, setLoading] = useState(false)
    const [position, setPosition] = useState(null)

    useEffect(()=>{
        
        // Get user's geolocation coordinates
        if(!position && !weather && !stations){
            console.log('getting location')
            getGeolocation(setPosition)
        }
        
        if(position && !weather && !stations){

            axios({
                method: 'post',
                url: `http://localhost:8000/search/coords`,
                data: {
                    search: {
                        lat: position[0],
                        long: position[1]
                    }
                }
            })
            .then(resp => {
                console.log('data:', resp.data.weather)
                setWeather(resp.data.weather)
                setStations(resp.data.sites)
                setLoading(false)
            })
            .catch(err => console.log(err))
        }
    }, [position])

    return (
        <div className={styles.Search}>
            <SearchComponent
 
                setWeather={setWeather} 
                setLoading={setLoading} 
                setStations={setStations}
                setPosition={setPosition}
            />
            {/* {!loading && weather && stations ? <Results stations={stations}
                                        weather={weather} 
                                        loading={loading} 
                                        /> : null} */}
            {!loading && weather && stations && position && <StationMap position={position} stations={stations}/>}
        </div>)
}

export default Search
