// **************** THIRD PARTY DEPENDENCIES ****************
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
// import { gql, useQuery } from '@apollo/client'
// import axios from 'axios'
import { BsPlusSquareFill, BsJournalBookmarkFill} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiWater } from 'react-icons/bi'

// **************** PESCADOR DEPENDENCIES ****************
import AuthContext from '../../store/AuthContext'
import classes from './Dashboard.module.css'
import DashboardIcon from './DashboardIcon'
import CurrentConditions from './CurrentConditions'

export default function Dashboard() {
    const user = useContext(AuthContext).user
    // **************** STATE ****************
    const [favoriteStation, setFavoriteStation] = useState([])
    // const [stationData, setStationData] = useState(null)
    // const mapContainer = useRef(null);
	// const map = useRef(null);
	// const [lng, setLng] = useState(-70.9);
	// const [lat, setLat] = useState(42.35);
	// const [zoom, setZoom] = useState(9);

	// mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jzb3JlbCIsImEiOiJja3p4cmo1aDgwNDFmMm9uMW50NXNuc25uIn0.hf69sRAXXmSEZi3TBKwnxw'

	// useEffect(() => {
	// 	if (map.current) return; // initialize map only once
	// 	map.current = new mapboxgl.Map({
	// 	container: mapContainer.current,
	// 	style: 'mapbox://styles/mapbox/streets-v11',
	// 	center: [lng, lat],
	// 	zoom: zoom
	// 	});
	// });
    
    // **************** HOOKS ****************
    useEffect(() => {
        axios({
            url: `http://localhost:8000/waterData/site/${user.favoriteStation.usgsId}`,
            method: 'GET',
            headers: {
                authorization: `Bearer Token ${user.token}`
            }
        })
        .then(station => {
            setFavoriteStation(station.data)
        })
    }, [user])

    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashboardIconDisplay}>
                <DashboardIcon title='Add A Trip' goesTo='/journal/add' >
                    <BsPlusSquareFill className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='My Waters' goesTo='/waters' >
                    <BiWater className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='Weather' goesTo='/weather' >
                    <TiWeatherPartlySunny className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='Journal' goesTo='/journal' >
                    <BsJournalBookmarkFill className={classes.icon}/>
                </DashboardIcon>
            </div>
            <div className={classes.WidgetDisplay}>

                <CurrentConditions station={favoriteStation}/>

                <div className={classes.WeatherDisplay}>
                    <h3>Weather Display</h3>
                    <p>Current and forecast weather conditions</p>
                </div> 
            </div>
        </div>
    )
}