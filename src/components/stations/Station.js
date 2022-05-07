import React, { useContext } from 'react'
import axios from 'axios'
import { gql, useMutation } from '@apollo/client'
import AuthContext from '../../store/AuthContext'
import classes from './Stations.module.css'

const Station = ({ water, station, setWaterStations, source }) => {
  const user = useContext(AuthContext)

    // ****************** GRAPHQL *********************
    const CREATE_STATION = gql`
      mutation AddWaterStation($usgsId: String!, $name: String!, $long: Float!, $lat: Float!, $waterId: ID){
        createStation(name: $name, usgsId: $usgsId, long: $long, lat: $lat, waterId: $waterId){
          name
          usgsId
          long
          lat
        }
      }
    `

    const [createStation] = useMutation(CREATE_STATION, {
      variables: {
        name: station.siteName,
        usgsId: station.siteId,
        long: station.siteLong,
        lat: station.siteLat,
        waterId: water._id
      }
    })

    const clickHandler = e => {
        createStation()
        setWaterStations(prevState => [...prevState, {
          name: station.siteName,
          usgsId: station.siteId,
          long: station.siteLong,
          lat: station.siteLat,
          waterId: water._id
        }])        
    }

    //borrowed title casing function(Greg Dean on StackOverflow)
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        )
    }


    const addFavoriteHandler = () => {
      axios({
          url: `http://localhost:8000/user/favorite`,
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${user.token}`,
              'Content-Type': 'application/json'
          },
          data: {
              'stationId': `${station._id}`
          }
      })
  }

    
    return (
        <div className={classes.StationDiv}>
          <p>{toTitleCase(source === 'found' ? station.siteName : station.name)}</p>
          {source === 'found' ? <button onClick={clickHandler}>+</button> : <button onClick={addFavoriteHandler}>Set As Favorite</button>}
          
    </div>
  )
}

export default Station