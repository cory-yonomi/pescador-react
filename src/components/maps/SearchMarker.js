import React from 'react'
import styles from './Maps.module.css'

const SearchMarker = ({lon, lat, station, openPopup}) => {
  return (
    
        
            <div className={styles.marker} onClick={() => openPopup(station)}>
                <span><b></b></span>
            </div>
    
  )
}

export default SearchMarker