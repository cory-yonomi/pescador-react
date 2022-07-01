import React, {useState, useEffect, useRef, useContext} from 'react'
import ReactDOM from 'react-dom'
import { MapContext } from '../../store/MapsContext'
import SearchPopup from './SearchPopup'
import mapboxgl from 'mapbox-gl'
import SearchMarker from './SearchMarker'
// import styles from './Maps.module.css'

const StationMap = ({position, stations}) => {
    console.log(stations)

    const mapContainer = useRef(null)
    const {setMap, map, setPopupContent, popupContent} = useContext(MapContext)
	
	const [lng, setLng] = useState(position[1])
	const [lat, setLat] = useState(position[0])
	const [zoom, setZoom] = useState(9)

    function openPopup(station)  {
        setPopupContent(station)
    }

	mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jzb3JlbCIsImEiOiJja3p4cmo1aDgwNDFmMm9uMW50NXNuc25uIn0.hf69sRAXXmSEZi3TBKwnxw'

	useEffect(() => {
		const initializeMap = ({setMap, mapContainer}) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [lng, lat],
                zoom: zoom
		    });

            map.on('load', ()=> {
                setMap(map)
                // map.resize()
            })

            stations.streams.forEach((station, i) => {
                const ref = React.createRef()
                ref.current = document.createElement('div')
                ReactDOM.render(<SearchMarker station={station} openPopup={openPopup}/>, ref.current)
    
                new mapboxgl.Marker(ref.current).setLngLat([station.lon, station.lat]).addTo(map)
            })
        }

        if (!map) initializeMap({setMap, mapContainer})
	}, [map, setMap]);

    

  return (
    <div>
        {popupContent && <SearchPopup station={popupContent}/>}
        <div ref={mapContainer} className="map-container" />
        
    </div>
  )
}

export default StationMap