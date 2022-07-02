import { useState, useContext } from 'react'
import AppDataContext from '../../store/AppDataContext'
import classes from './Stations.module.css'
import StationList from './StationList'
import SearchBar from '../shared/SearchBar'

const AddStation = ({ water, setWaterStations }) => {

	const [loading, setLoading] = useState(false)
	const [showSearch, setShowSearch] = useState(true)
	const [message, setMessage] = useState(null)

	const {foundStations} = useContext(AppDataContext)

	return (
		<div className={classes.AddStation}>
			{showSearch && <SearchBar  
                setLoading={setLoading} 
                setShowSearch={setShowSearch}
				setParentMessage={setMessage}
			/>}
      <p>{message && message}</p>
      <p>{loading && "Searching..."}</p>
			{foundStations && (<StationList
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
