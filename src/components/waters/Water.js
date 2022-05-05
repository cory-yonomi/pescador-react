import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import axios from 'axios'
import classes from './Waters.module.css'

import AddStation from '../stations/AddStation'

const Water = ({ user }) => {
    const [water, setWater] = useState({})
    const [waterStations, setWaterStations] = useState([])
    const [addStationModal, setAddStationModal] = useState(false)

    const { id } = useParams()
    console.log( id )

    const WATER_BY_ID = gql`
    query water($_id: ID){
        water(_id: $_id){
            _id
            name
            type
            stations {
                name
                _id
                long
                lat
                usgsId
            }
        }
    }
    `

    const { data } = useQuery(WATER_BY_ID, {
        variables: {
            _id: id
        }
    })

    const addFavoriteHandler = () => {
        axios({
            url: `http://localhost:8000/user/favorite`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            data: {
                'stationId': `${water._id}`
            }
        })
    }

    const addStationHandler = () => {
        setAddStationModal(true)
    }

    useEffect(()=>{
        if(data){
            console.log('data in water', data)
            setWater(data.water)
            setWaterStations(data.water.stations)
        }
    }, [data])

    const allStations = waterStations.map(station => {
        console.log(station)
        return (
        <p>{station.name}</p>
        )
    })

    return (
        <div className={classes.Water}>
            <div>
                <h1>{water.name}</h1>
                <h3>{water.type}</h3>
                <button onClick={addFavoriteHandler}>Set As Favorite</button>
            </div>
            <div>
                <h2>Stations</h2>
                <button onClick={addStationHandler}>Add Stations</button>
            </div>
            <div>
                {addStationModal ?  <AddStation water={water} setWaterStations={setWaterStations}/> : allStations }
            </div>
        </div>
    )
};

export default Water;
