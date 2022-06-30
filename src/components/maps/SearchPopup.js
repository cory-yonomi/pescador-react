import React, {useContext, useEffect, useRef} from 'react'
import { MapContext } from '../../store/MapsContext'
import mapboxgl from 'mapbox-gl'
import styles from './Maps.module.css'

const SearchPopup = ({station}) => {
    const { map, setPopupContent } = useContext(MapContext)
    const popUpRef = useRef()

    useEffect(() => {
        const popup = new mapboxgl.Popup({offset: 15})
            .setLngLat([station.lon, station.lat])
            .setDOMContent(popUpRef.current)
            .addTo(map)

        popup.on("close", ()=>{
            setPopupContent(null)
        })
    })

  return (
    <div style={{display: 'none'}}>
        <div ref={popUpRef} className={styles.popup}>
            {station.name}
            <button>Add to Favorites</button>
        </div>
    </div>
  )
}

export default SearchPopup