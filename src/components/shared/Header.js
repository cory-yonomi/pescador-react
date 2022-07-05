import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/AuthContext'

const linkStyle = {
	fontFamily: 'Roboto Condensed',
    color: 'white',
    textDecoration: 'none'
}

const brandStyle = {
	fontFamily: 'Yellowtail',
	fontSize: '1.5rem',
	fontWeight: '300',
	color: 'white',
    textDecoration: 'none'
}

const Header = () => {
	const user = useContext(AuthContext).user

	const authenticatedOptions = (
		<>
			<Nav.Link>
				<Link to='change-password' style={linkStyle}>
					Change Password
				</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='sign-out' style={linkStyle}>
					Sign Out
				</Link>
			</Nav.Link>
		</>
	)
	
	const unauthenticatedOptions = (
		<>
			<Nav.Link href="/sign-up">
				<Link to='sign-up' style={linkStyle}>Sign Up</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='sign-in' style={linkStyle}>Sign In</Link>
			</Nav.Link>
		</>
	)
	
	const alwaysOptions = (
		<>
			<Nav.Link>
				<Link to='/about' style={linkStyle}>
					About
				</Link>
			</Nav.Link>
		</>
	)

	return (
		
		<Navbar collapseOnSelect bg='dark' variant='dark' expand='md'>
			<Container >
				<Navbar.Brand >
					<Link to={user ? '/dashboard' : '/'} style={brandStyle}>
						Pescador
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsice-navbar-nav' >
					<Nav className='me-auto'>
					</Nav>
					<Nav >
						{user && (
							<span className='navbar-text mr-2'>Welcome, {user.email}</span>
						)}
						{alwaysOptions}
						{/* {user ? authenticatedOptions : unauthenticatedOptions} */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		
	)
}

export default Header
