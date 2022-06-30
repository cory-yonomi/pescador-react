import React, {useState, useContext } from 'react'
import axios from 'axios'
import { MapContext } from '../../store/MapsContext'
// import classes from './Shared.module.css'

const SearchBar = ({formStyle, setLoading, setStations, setWeather, setPosition}) => {

    const {setMap} = useContext(MapContext)
    
    const [zipInput, setZipInput] = useState('')
    const [latInput, setLatInput] = useState('')
    const [longInput, setLongInput] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        setLoading(true)
        setMap(null)
        axios({
            method: 'post',
            url: `http://localhost:8000/search/${formStyle}`,
            data: {
                search: {
                    zip: zipInput,
                    lat: latInput,
                    long: longInput
                }
            }
        })
            .then(resp => {
                setWeather(resp.data.weather)
                setStations(resp.data.sites)
                setPosition([resp.data.weather.lat, resp.data.weather.lon])
                setLoading(false)
                setZipInput('')
                setLatInput('')
                setLongInput('')
            })
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
        </>
    );
};

export default SearchBar;
