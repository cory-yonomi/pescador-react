import React, {useContext, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { MapContext } from '../../store/MapsContext'
import AuthContext from '../../store/AuthContext'
import mapboxgl from '!mapbox-gl'
import styles from './Maps.module.css'

const SearchPopup = ({station}) => {
    const { map, setPopupContent } = useContext(MapContext)
    const { user } = useContext(AuthContext)
    const popUpRef = useRef()

    useEffect(() => {
        const popup = new mapboxgl.Popup({offset: 30})
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
            <div>{station.name}</div>
            <div>Flow: {station.flowRate} cfs</div>
            <div>Gage Height: {station.gageHt} ft</div>
            <Link to={`/station/${station.usgsId}`}><button>See More</button></Link>
            {user && <button>Add to Favorites</button>}
        </div>
    </div>
  )
}

export default SearchPopup