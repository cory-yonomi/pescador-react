import React, {useEffect, useRef, useContext, useCallback} from 'react'
import ReactDOM from 'react-dom'
import { MapContext } from '../../store/MapsContext'
import SearchPopup from './SearchPopup'
import mapboxgl from '!mapbox-gl'
import SearchMarker from './SearchMarker'
// import styles from './Maps.module.css'

const StationMap = ({position, stations}) => {
    console.log(stations)

    const mapContainer = useRef(null)
    const {setMap, map, setPopupContent, popupContent} = useContext(MapContext)
	
// 	const [lng, setLng] = useState(position[1])
// 	const [lat, setLat] = useState(position[0])
// 	const [zoom, setZoom] = useState(9)

    const popupCallback = useCallback(function openPopup(station)  {
        setPopupContent(station)
    }, [setPopupContent])

	mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jzb3JlbCIsImEiOiJja3p4cmo1aDgwNDFmMm9uMW50NXNuc25uIn0.hf69sRAXXmSEZi3TBKwnxw'

	useEffect(() => {
        
		const initializeMap = ({setMap, mapContainer}) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [position[1], position[0]],
                zoom: 9
		    });

            map.on('load', ()=> {
                setMap(map)
                // map.resize()
            })

            stations.streams.forEach((station, i) => {
                const ref = React.createRef()
                ref.current = document.createElement('div')
                ReactDOM.render(<SearchMarker station={station} openPopup={popupCallback}/>, ref.current)
    
                new mapboxgl.Marker(ref.current).setLngLat([station.lon, station.lat]).addTo(map)
            })
        }

        if (!map) initializeMap({setMap, mapContainer})
        
        return () => {
            map && map.remove()
            map && setMap(null)
        }
	}, [map, setMap, position, popupCallback, stations.streams]);

    

  return (
    <div>
        {popupContent && <SearchPopup station={popupContent}/>}
        <div ref={mapContainer} className="map-container" />
        
    </div>
  )
}

export default StationMap