import React, {useState} from 'react'
import axios from 'axios'
// import classes from './Shared.module.css'

const SearchBar = ({formStyle, setLoading, setStations, setWeather}) => {
    
    const [zipInput, setZipInput] = useState('')
    const [latInput, setLatInput] = useState('')
    const [longInput, setLongInput] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        setLoading(true)
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
                setLoading(false)
                console.log(resp.data)
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
            <label>Enter Your Zip</label>
            <input type="text" placeholder="Zip Code" onChange={zipHandler}/>
            <br />
        </>
    )

    const coordSearch = (
        <>
            <label>Latitude:</label>
            <input type="text" onChange={latHandler}/>
            <br />
            <label>Longitude:</label>
            <input type="text" onChange={longHandler}/>
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
