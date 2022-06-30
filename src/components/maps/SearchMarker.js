import React from 'react'
import styles from './Maps.module.css'

const SearchMarker = ({lon, lat, station, openPopup}) => {
  return (
    
        
            <div className={styles.marker} onClick={(e)=> openPopup(e, station)}>
                <span><b></b></span>
            </div>
    
  )
}

export default SearchMarker