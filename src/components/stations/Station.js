import React from 'react'
import classes from './Stations.module.css'

const Station = ({ station }) => {
    // ****************** GRAPHQL *********************
    

    const clickHandler = e => {
        
        
    }

    //borrowed title casing function(Greg Dean on StackOverflow)
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        )
    }
    
    return (
        <div className={classes.StationDiv}>
          <p>{toTitleCase(station.siteName)}</p>
          
          <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default Station