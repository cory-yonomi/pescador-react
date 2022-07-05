import React, { useState, useEffect, useContext } from 'react'
import SearchComponent from './SearchComponent'
import AppDataContext from '../../store/AppDataContext'
import Results from './Results'
import StationMap from '../maps/StationMap'
import styles from './Search.module.css'
import getGeolocation from '../../lib/getGeolocation'
import { autoSearch } from '../../api/search'

const Search = () => {

    const [loading, setLoading] = useState(false)
    const [showSearch, setShowSearch] = useState(true)

    const {foundStations, setFoundStations, weather, setWeather, position, setPosition} = useContext(AppDataContext)

    useEffect(()=>{
        
        // Get user's geolocation coordinates
        if(!position && !weather && !foundStations){
            console.log('getting location')
            getGeolocation(setPosition)
        }
        // If user allows location, execute the query
        // If not, the searchShow will stay true allowing user to search by zip/coords
        if(position && !weather && !foundStations){
            setShowSearch(false)
            autoSearch(position[0], position[1])
            .then(resp => {
                
                setWeather(resp.data.weather)
                setFoundStations(resp.data.sites)
                setLoading(false)
            })
            .catch(err => console.log(err))
        }
    }, [position, foundStations, weather, setFoundStations, setPosition, setWeather])

    return (
        <div className={styles.Search}>
            {showSearch && <SearchComponent
                setShowSearch={setShowSearch} 
                setLoading={setLoading} 
            />}
            {!showSearch && <p onClick={()=>setShowSearch(true)}>New Search</p>}
            {!loading && weather && foundStations ? <Results stations={foundStations}
                                        weather={weather} 
                                        loading={loading} 
                                        /> : null}
            {!loading && weather && foundStations && position && <StationMap position={position} stations={foundStations}/>}
        </div>)
}

export default Search
