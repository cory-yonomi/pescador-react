import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import SearchPopup from './SearchPopup'
import mapboxgl from 'mapbox-gl'
import SearchMarker from './SearchMarker'
// import styles from './Maps.module.css'

const StationMap = ({position, stations}) => {
    console.log(stations)

    const mapContainer = useRef(null)
    const popUpRef = useRef(new mapboxgl.Popup({offset: 15}))
	
	const [lng, setLng] = useState(position[1])
	const [lat, setLat] = useState(position[0])
	const [zoom, setZoom] = useState(9.5)
    const [currentMarker, setCurrentMarker] = useState(null)

    // function openPopup(e, station) {
    //     console.log(e)
    //     const popupNode = document.createElement("div")
    // ReactDOM.render(
    //   <SearchPopup
    //     station={station}
    //   />,
    //   popupNode
    // )
    // popUpRef.current
    //   .setLngLat(e.lngLat)
    //   .setDOMContent(popupNode)
    //   .addTo(map)
    // }

	mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jzb3JlbCIsImEiOiJja3p4cmo1aDgwNDFmMm9uMW50NXNuc25uIn0.hf69sRAXXmSEZi3TBKwnxw'

	useEffect(() => {
		const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
		});

        stations.streams.forEach((station, i) => {
            const ref = React.createRef()
            ref.current = document.createElement('div')
            ReactDOM.render(<SearchMarker station={station}/>, ref.current)

            new mapboxgl.Marker(ref.current).setLngLat([station.lon, station.lat]).addTo(map)
        })

        return () => map.remove()
	}, []);

    

  return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default StationMap