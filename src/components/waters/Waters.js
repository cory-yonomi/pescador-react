import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import WatersDisplay from './WatersDisplay'
import CreateWater from './CreateWater'
import classes from './Waters.module.css'

const Waters = ({ user }) => {
    // ***************** STATE *****************
    const [waters, setWaters] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    // ***************** GRAPHQL FUNCTIONS *******************

    // All user's waters query
    const GET_USER_WATERS = gql`
    query userWaters($userId: ID){
        userWaters(userId: $userId){
            name
            type
            _id
        }
        stations{
            name
        }
    }
    `

    // Make query to GraphQL as component loads
    const { data } = useQuery(GET_USER_WATERS, {
        variables: {
            userId: user._id
        }
    })

    // Set water data from query
    useEffect(() => {
        if (data) {
            console.log('data:', data)
            setWaters(data.userWaters)
        }
    }, [data])

    const addClickHandler = () => {
        setShowAdd(true)
    }

    const closeClickHandler = () => {
        setShowAdd(false)
    }
    
    return (
        <>
            <div className={classes.Waters}>
                {showAdd ? <CreateWater user={user} closeClickHandler={closeClickHandler} waters={waters} setWaters={setWaters}/> : <WatersDisplay waters={waters} addClickHandler={addClickHandler}/>}
            </div>
        </>
    )
    
}

export default Waters