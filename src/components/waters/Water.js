import React from 'react'
import { gql, useQuery } from '@apollo/client'

const Water = () => {

    const WATER_BY_ID = gql`
    query water{
        userWaters(userId)
    }
    `

    return (
        <div>

        </div>
    )
};

export default Water;
