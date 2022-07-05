import { useState, useContext } from 'react'
import AppDataContext from '../../store/AppDataContext'
import classes from './Stations.module.css'
import StationMap from '../maps/StationMap'
import BackButton from '../shared/BackButton'
import SearchComponent from '../search/SearchComponent'

const AddStation = ({ setAddStationModal }) => {

	const [loading, setLoading] = useState(false)
	const [showSearch, setShowSearch] = useState(true)
	const [message, setMessage] = useState(null)

	const {foundStations, position} = useContext(AppDataContext)

	return (
		<div className={classes.AddStation}>
			{/* {showSearch && <SearchBar  
                setLoading={setLoading} 
                setShowSearch={setShowSearch}
				setParentMessage={setMessage}
			/>} */}
			{showSearch && <SearchComponent  
                setLoading={setLoading} 
                setShowSearch={setShowSearch}
				setParentMessage={setMessage}
			/>}
      <p>{message && message}</p>
      <p>{loading && "Searching..."}</p>
			{!loading && foundStations && <StationMap stations={foundStations} position={position}/>}
			<BackButton onClick={() => setAddStationModal(false)}/>
		</div>
	)
}

export default AddStation
