import React, {useState} from 'react'
import SearchBar from '../shared/SearchBar'
import Results from './Results'

const Search = () => {
    const [searchBy, setSearchBy] = useState(null)
    const [weather, setWeather] = useState()
    const [stations, setStations] = useState()
    const [loading, setLoading] = useState(false)

    return (
        <>
            <div>
                <h3>Get Your Local Conditions</h3>
                <p>Choose Your Search:</p>
                <div>
                    <button onClick={()=> setSearchBy('county')}>County Name</button>
                    <button onClick={()=> setSearchBy('zip')}>Zip Code</button>
                    <button onClick={()=> setSearchBy('coords')}>Long + Lat</button>
                </div>
            </div>
            <div>
                <SearchBar 
                    formStyle={searchBy} 
                    setLoading={setLoading} 
                    setStations={setStations} 
                    setWeather ={setWeather} 
                />
            </div>
            {!loading && weather ? <Results /> : null}
        </>)
}

export default Search
