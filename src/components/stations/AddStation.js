import { useState } from 'react'
import axios from 'axios'
import classes from './Stations.module.css'
import StationList from './StationList'

const AddStation = ({ water, setWaterStations }) => {
	const [search, setSearch] = useState('')
	const [state, setState] = useState('')
	const [foundStations, setFoundStations] = useState([])
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(null)

	const submitHandler = (e) => {
		setLoading(true)
		e.preventDefault()
		axios({
			method: 'get',
			url: 'http://localhost:8000/waterData/county',
			params: {
				countyName: search,
				state: state,
			},
		})
      .then((response) => {
        console.log(response)
				if (response.data === "") {
          setLoading(false)
          setFoundStations([])
					setMessage(<p>No results, please try again</p>)
				} else {
          setLoading(false)
          setMessage(null)
					setFoundStations(response.data)
				}
			})
			.catch((err) => console.log(err))
	}

	return (
		<div className={classes.AddStation}>
			<form onSubmit={submitHandler} className={classes.StationForm}>
				<input
					type='text'
					id='search'
					placeholder='County Name'
					onChange={(e) => setSearch(e.target.value)}
					className={classes.StationFormInput}
				/>
				<select
					name='state'
					onChange={(e) => setState(e.target.value)}
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
				<input
					type='submit'
					value='Search'
					className={classes.StationFormInput}
				/>
      </form>
      <p>{message && message}</p>
      <p>{loading && "Searching..."}</p>
			{foundStations.length > 0 && (<StationList
				water={water}
				source={'found'}
				stations={foundStations}
				setWaterStations={setWaterStations}
				setLoading={setLoading}
			/>)}
		</div>
	)
}

export default AddStation
