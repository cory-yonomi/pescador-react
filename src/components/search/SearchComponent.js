import React, {useState} from 'react'
import SearchBar from '../shared/SearchBar'
import styles from './Search.module.css'

const SearchComponent = ({setLoading, setStations, setWeather, setPosition}) => {

    const [searchBy, setSearchBy] = useState(null) 

  return (
    <div>
        <div className={styles.SearchHeader}>
                <h3>Get Your Local Conditions</h3>
                <p><i>Choose Your Search:</i></p>
                <div>
                    <button onClick={()=> setSearchBy('zip')}>Zip Code</button>
                    <button onClick={()=> setSearchBy('coords')}>Long + Lat</button>
                </div>
            </div>
            <div className={styles.SearchBar}>
                <SearchBar 
                    formStyle={searchBy} 
                    setLoading={setLoading} 
                    setStations={setStations} 
                    setWeather={setWeather}
                    setPosition={setPosition} 
                />
            </div>
    </div>
  )
}

export default SearchComponent