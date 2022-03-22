// **************** THIRD PARTY DEPENDENCIES ****************
import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
// import axios from 'axios'
import { BsPlusSquareFill, BsJournalBookmarkFill} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiWater } from 'react-icons/bi'

// **************** PESCADOR DEPENDENCIES ****************
import classes from './Dashboard.module.css'
import DashboardIcon from './DashboardIcon'
import CreateProfile from '../profile/CreateProfile'
import AddStation from '../stations/AddStation'

export default function Dashboard({ user, profile }) {
    // **************** STATE ****************
    const [favoriteStation, setFavoriteStation] = useState(null)
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

    // **************** GRAPHQL FUNCTIONS ****************
    const GET_DASHBOARD_DATA = gql`
    query DashBoardData($station: ID){
        station(_id: $station) {
            name
        }
    }
    `

    // const { data } = useQuery(GET_DASHBOARD_DATA, {
    //     variables: {
    //         _id: profile.favoriteStation
    //     }
    // })

    // // **************** HOOKS ****************
    // useEffect(() => {
    //     if (data) {
    //         console.log("inside data check")
    //         if (data.station) {
    //             setFavoriteStation(data.station)
    //             // axios({
    //             //     url: 
    //             // })
    //         }
    //     }
    // }, [data])

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
                {!profile && <CreateProfile user={user} />}
                <div className={classes.CurrentConditions}>
                    <h3>Current Conditions at {favoriteStation ? favoriteStation.name : "Favorite"}</h3>
                    <p>Favorite river information</p>
                </div>

                <div className={classes.WeatherDisplay}>
                    <h3>Weather Display</h3>
                    <p>Current and forecast weather conditions</p>
                </div> 
            </div>
            <AddStation />
        </div>
    )
}