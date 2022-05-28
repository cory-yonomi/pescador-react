import React from 'react'
import StationList from '../stations/StationList'
import classes from './Search.module.css'

const Results = ({loading, weather, stations}) => {
    return (
        <div className={classes.Results}>
            <StationList loading={loading} stations={stations} source='search'/>
        </div>
    )
}

export default Results;
