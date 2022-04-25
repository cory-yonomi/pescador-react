import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'

const Water = () => {
    const [water, setWater] = useState({})

    const { id } = useParams()
    console.log( id )

    const WATER_BY_ID = gql`
    query water($_id: ID){
        water(_id: $_id){
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

    useEffect(()=>{
        if(data){
            setWater(data.water)
        }
    }, [data])

    return (
        <div>
            <h1>{water.name}</h1>
        </div>
    )
};

export default Water;
