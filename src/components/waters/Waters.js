import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import CreateWater from './CreateWater'
import classes from './Waters.module.css'

const Waters = ({ user }) => {
    // ***************** STATE *****************
    const [waters, setWaters] = useState([])

    // ***************** GRAPHQL FUNCTIONS *******************

    // All user's waters query
    const GET_USER_WATERS = gql`
    query waters{
        waters{
            name
        }
        stations{
            name
        }
    }
    `

    // Make query to GraphQL as component loads
    const { data } = useQuery(GET_USER_WATERS)
    
    // Grab params if they exist
    const params = useParams()
    console.log('params:', params)

    // Set water data from query
    useEffect(() => {
        if (data) {
            console.log('data:', data)
            setWaters(data.waters)
        }
    }, [data])
    
    // If there are no params render the standard Waters index
    if (!params.action) {
        return (
            <div className={classes.Waters}>
                <h2>Waters</h2>
                {waters.map(water => <p>{water.name}</p>)}
            </div>
        )
    // Render create form for "add" params
    } else if(params.action === "add") {
        return (
            <div className={classes.Waters}>
                <h2>Add Waters</h2>
                <CreateWater user={user} />
            </div>
        )
     }
    
}

export default Waters