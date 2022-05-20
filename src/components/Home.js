import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

const homeStyle = {
	position: 'relative',
	marginLeft: '20%'
}

const Home = (props) => {
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
				<Row>
					<h3>Find current conditions for your area:</h3>
					<p>Search By:</p>
				</Row>
				
					<button>County Name</button>
					<button>Zip Code</button>
				
				
					<p>More water data sites, less accurate weather</p>
					<p></p>
				
			</Container>
		</Fragment>
	)
}

export default Home
