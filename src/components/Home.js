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
					<h2>Pescador</h2>
					<h4>The Angler's Best Friend</h4>
				</Row>
				
					<button><Link to='/sign-in'>Log In</Link></button><button><Link to='/sign-up'>Create Account</Link></button>
				
			</Container>
		</Fragment>
	)
}

export default Home
