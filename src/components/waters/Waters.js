import { useEffect, useState, useContext } from 'react'
import { gql, useQuery } from '@apollo/client'

import WatersDisplay from './WatersDisplay'
import CreateWater from './CreateWater'
import classes from './Waters.module.css'
import AppDataContext from '../../store/AppDataContext'
import AuthContext from '../../store/AuthContext'

const Waters = () => {
    const userData = useContext(AppDataContext)
    const user = useContext(AuthContext).user
    // ***************** STATE *****************
    // const [waters, setWaters] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    // ***************** GRAPHQL FUNCTIONS *******************

    // All user's waters query
    const GET_USER_WATERS = gql`
    query userWaters($userId: ID){
        userWaters(userId: $userId){
            name
            type
            _id
            stations {
                name
                _id
                usgsId
                long
                lat
            }
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
            userData.setUserWaters(data.userWaters)
        }
    }, [data, userData])

    const addClickHandler = () => {
        setShowAdd(true)
    }

    const closeClickHandler = () => {
        setShowAdd(false)
    }
    
    return (
        <>
            <div className={classes.Waters}>
                {showAdd ? <CreateWater user={user} closeClickHandler={closeClickHandler} waters={userData.userWaters} setWaters={userData.setUserWaters}/> : <WatersDisplay waters={userData.userWaters} addClickHandler={addClickHandler}/>}
            </div>
        </>
    )
    
}

export default Waters