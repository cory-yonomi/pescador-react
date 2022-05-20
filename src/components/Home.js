import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

const homeStyle = {
	position: 'relative',
	marginLeft: '20%'
}

const Home = (props) => {
	const [showSearch, setShowSearch] = useState(false)
	const [searchInput, setSearchInput] = useState('')

	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Fragment >
			<Container style={homeStyle}>
				<Row>
					<h1>Pescador</h1>
					<h4>The Angler's Best Friend</h4>
				</Row>
					<button><Link to='/sign-in'>Log In</Link></button>
					<button><Link to='/sign-up'>Create Account</Link></button>
			</Container>
			<Container>
					<h3>Find current conditions for your area:</h3>
					<button onClick={() => setShowSearch(x => !x)}>Go</button>									
			</Container>
		</Fragment>
	)
}

export default Home
