import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import StationList from '../stations/StationList'
import classes from './Waters.module.css'

import AddStation from '../stations/AddStation'
import BackButton from '../shared/BackButton'

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

    return (
        <div className={classes.Water}>
            <div>
                <h1>{water.name}</h1>
                <h3>{water.type}</h3>
                
            </div>
            <div>
                <h2>Stations</h2>
                <button onClick={addStationHandler}>Add Stations</button>
            </div>
            <div>
                {addStationModal ?  <AddStation water={water} setWaterStations={setWaterStations}/> : <StationList user={user} water={water} stations={waterStations} source={'water'}/> }
            </div>
            <BackButton />
        </div>
    )
};

export default Water;
