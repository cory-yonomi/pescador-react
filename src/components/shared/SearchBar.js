import React, {useState, useContext } from 'react'
import AppDataContext from '../../store/AppDataContext';
import { MapContext } from '../../store/MapsContext'
import { executeSearch } from '../../api/search';
import getGeolocation from '../../lib/getGeolocation';
// import classes from './Shared.module.css'

const SearchBar = ({formStyle, setLoading, setShowSearch, setParentMessage}) => {

    const {setMap, setPopupContent} = useContext(MapContext)
    const { setFoundStations, setWeather, setPosition, position } = useContext(AppDataContext)
    
    const [zipInput, setZipInput] = useState('')
    const [latInput, setLatInput] = useState('')
    const [longInput, setLongInput] = useState('')
    const [message, setMessage] = useState(null)

    function submitHandler(e) {
        e.preventDefault()
        if((zipInput.length === 5 )|| (latInput.length > 2 && longInput.length > 2)) {
            setLoading(true)
            setMap(null)
            setPopupContent(null)
            executeSearch(formStyle, zipInput, latInput, longInput)
                .then(resp => {
                    setShowSearch(false)
                    setWeather(resp.data.weather)
                    setFoundStations(resp.data.sites)
                    setPosition([resp.data.weather.lat, resp.data.weather.lon])
                    setLoading(false)
                    setZipInput('')
                    setLatInput('')
                    setLongInput('')
                })
        }
    }

    function myLocationHandler() {
        if(!position)getGeolocation(setPosition)
        if(!position){
            setMessage('We cannot access your location data, you may need to reset permissions for Pescador.')
        } else {
            setLoading(true)
            setMap(null)
            setPopupContent(null)
            executeSearch('coords', zipInput, position[0], position[1])
                .then(resp => {
                    setShowSearch(false)
                    setWeather(resp.data.weather)
                    setFoundStations(resp.data.sites)
                    setPosition([resp.data.weather.lat, resp.data.weather.lon])
                    setLoading(false)
                    setZipInput('')
                    setLatInput('')
                    setLongInput('')
                })
        }
    }

    function zipHandler(e) {
        setZipInput(e.target.value)
    }

    function latHandler(e) {
        setLatInput(e.target.value)
    }

    function longHandler(e) {
        setLongInput(e.target.value)
    }

    const zipSearch = (
        <>
            <input type="text" placeholder="Zip Code" onChange={zipHandler}/>
            <br />
        </>
    )

    const coordSearch = (
        <>
            <input type="text" placeholder="Latitude" onChange={latHandler}/>
            <br />
            <input type="text" placeholder="Longitude" onChange={longHandler}/>
            <br />
        </>
    )

    return (
        <>
            <form onSubmit={submitHandler}>
                
                {formStyle === 'zip' && zipSearch}
                {formStyle === 'coords' && coordSearch}
                <input type="submit" value="Search" />
            </form>
            <button onClick={myLocationHandler}>Use My Location</button>
            {message && <p>{message}</p>}
        </>
    );
};

export default SearchBar;
