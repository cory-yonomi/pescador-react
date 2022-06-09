import React, {useState} from 'react'
import SearchBar from '../shared/SearchBar'
import Results from './Results'
import styles from './Search.module.css'

const Search = () => {
    const [searchBy, setSearchBy] = useState(null)
    const [weather, setWeather] = useState()
    const [stations, setStations] = useState()
    const [loading, setLoading] = useState(false)

    return (
        <div  className={styles.Search}>
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
                    setWeather ={setWeather} 
                />
            </div>
            {!loading && weather ? <Results stations={stations} weather={weather} loading={loading} /> : null}
        </div>)
}

export default Search
