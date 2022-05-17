import React from 'react'
import CurrentFlow from '../charts/CurrentFlow'
import classes from './Dashboard.module.css'

const CurrentConditions = ({station}) => {

  return (
    
      <div className={classes.CurrentConditions}>
        <div>
          <h3>Current Conditions</h3>
          <h5>{station.name}</h5>
          <p>Flow: {}</p>
        </div>
        <div className={classes.DashboardChart}>
            <CurrentFlow data={station.values.flowRate} />
        </div>
      </div>   
  )
}

export default CurrentConditions