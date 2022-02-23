import { Fragment, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import { Container, Row } from 'react-bootstrap'

const homeStyle = {
	position: 'relative',
	marginLeft: '20%'
}

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
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
		<Fragment >
			<Container style={homeStyle}>
				<Row>
					<h2>Pescador</h2>
					<h4>The Angler's Best Friend</h4>
				</Row>
				
					<button><Link to='/sign-in'>Log In</Link></button><button><Link to='/sign-up'>Create Account</Link></button>
				
			</Container>
			<div>
				<div ref={mapContainer} className="map-container" />
			</div>
		</Fragment>
	)
}

export default Home
