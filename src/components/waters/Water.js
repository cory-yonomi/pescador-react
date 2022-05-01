import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import axios from 'axios'

const Water = ({ user }) => {
    const [water, setWater] = useState({})

    const { id } = useParams()
    console.log( id )

    const WATER_BY_ID = gql`
    query water($_id: ID){
        water(_id: $_id){
            _id
            name
            type
        }
        stations{
            name
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

    useEffect(()=>{
        if(data){
            setWater(data.water)
        }
    }, [data])

    return (
        <>
            <div>
                <h1>{water.name}</h1>
                <h3>{water.type}</h3>
                <button onClick={addFavoriteHandler}>Set As Favorite</button>
            </div>
            <div>
                <h2>Stations</h2>
            </div>
        </>
    )
};

export default Water;
