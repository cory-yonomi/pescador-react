import {useState, useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl';

const StationMap = ({position}) => {
    console.log(position)

    const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(position[1]);
	const [lat, setLat] = useState(position[0]);
	const [zoom, setZoom] = useState(9);

	mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jzb3JlbCIsImEiOiJja3p4cmo1aDgwNDFmMm9uMW50NXNuc25uIn0.hf69sRAXXmSEZi3TBKwnxw'

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [lng, lat],
		zoom: zoom
		});
	});

  return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default StationMap