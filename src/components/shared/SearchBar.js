import React, {useEffect, useState} from 'react'
import axios from 'axios'
import classes from './Shared.module.css'

const SearchBar = ({formStyle}) => {
    const [searchResults, setSearchResults] = useState([])
    const [zipInput, setZipInput] = useState('')
    const [countyInput, setCountyInput] = useState('')
    const [stateInput, setStateInput] = useState('')
    const [latInput, setLatInput] = useState('')
    const [longInput, setLongInput] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:8000/search',
            data: {
                search: {
                    param: formStyle,
                    zip: zipInput,
                    county: countyInput,
                    state: stateInput,
                    lat: latInput,
                    long: longInput
                }
            }
        })
            .then(resp => {
                console.log(resp)
            })
    }

    function clearState() {
        setCountyInput('')
    }

    function zipHandler(e) {
        setZipInput(e.target.value)
    }

    function stateHandler(e) {
        setStateInput(e.target.value)
    }

    function countyHandler(e) {
        setCountyInput(e.target.value)
    }

    function latHandler(e) {
        setLatInput(e.target.value)
    }

    function longHandler(e) {
        setLongInput(e.target.value)
    }

    useEffect(()=>{
        clearState()
    })

    const countySearch = (
        <>
            <label>County name:</label>
            <input type="text" placeholder="County Name" onChange={countyHandler}/>
            <label>State:</label>
            <select
					name='state'
					onChange={stateHandler}
					className={classes.StationFormInput}
				>
					<option value='AL'>AL</option>
					<option value='AK'>AK</option>
					<option value='AR'>AR</option>
					<option value='AZ'>AZ</option>
					<option value='CA'>CA</option>
					<option value='CO'>CO</option>
					<option value='CT'>CT</option>
					<option value='DC'>DC</option>
					<option value='DE'>DE</option>
					<option value='FL'>FL</option>
					<option value='GA'>GA</option>
					<option value='HI'>HI</option>
					<option value='IA'>IA</option>
					<option value='ID'>ID</option>
					<option value='IL'>IL</option>
					<option value='IN'>IN</option>
					<option value='KS'>KS</option>
					<option value='KY'>KY</option>
					<option value='LA'>LA</option>
					<option value='MA'>MA</option>
					<option value='MD'>MD</option>
					<option value='ME'>ME</option>
					<option value='MI'>MI</option>
					<option value='MN'>MN</option>
					<option value='MO'>MO</option>
					<option value='MS'>MS</option>
					<option value='MT'>MT</option>
					<option value='NC'>NC</option>
					<option value='NE'>NE</option>
					<option value='NH'>NH</option>
					<option value='NJ'>NJ</option>
					<option value='NM'>NM</option>
					<option value='NV'>NV</option>
					<option value='NY'>NY</option>
					<option value='ND'>ND</option>
					<option value='OH'>OH</option>
					<option value='OK'>OK</option>
					<option value='OR'>OR</option>
					<option value='PA'>PA</option>
					<option value='RI'>RI</option>
					<option value='SC'>SC</option>
					<option value='SD'>SD</option>
					<option value='TN'>TN</option>
					<option value='TX'>TX</option>
					<option value='UT'>UT</option>
					<option value='VT'>VT</option>
					<option value='VA'>VA</option>
					<option value='WA'>WA</option>
					<option value='WI'>WI</option>
					<option value='WV'>WV</option>
					<option value='WY'>WY</option>
			</select>
            <br />
        </>
    )

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
                {formStyle === 'county' && countySearch}
                {formStyle === 'zip' && zipSearch}
                {formStyle === 'coords' && coordSearch}
                <input type="submit" value="Search" />
            </form>
        </>
    );
};

export default SearchBar;
