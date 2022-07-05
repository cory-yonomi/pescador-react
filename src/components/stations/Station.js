import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleStationQuery } from '../../api/search'
import CurrentConditions from '../dashboard/CurrentConditions'
import styles from './Stations.module.css'

const Station = () => {

    const [station, setStation] = useState(null)

    const {stationId} = useParams()
    
    useEffect(()=>{
        if(!station){
            singleStationQuery(stationId)
            .then(resp => {
                setStation(resp.data)
            })
        }
    })


  return (
    <div className={styles.stationChart}>
        {station && <CurrentConditions station={station}/>}
    </div>
  )
}

export default Station