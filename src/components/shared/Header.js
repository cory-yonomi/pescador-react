import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/AuthContext'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const Header = () => {
	const user = useContext(AuthContext).user

	const authenticatedOptions = (
		<>
			<div>
				<Link to='change-password' style={linkStyle}>
					Change Password
				</Link>
			</div>
			<div>
				<Link to='sign-out' style={linkStyle}>
					Sign Out
				</Link>
			</div>
		</>
	)
	
	const unauthenticatedOptions = (
		<>
			<div>
				<Link to='sign-up' style={linkStyle}>Sign Up</Link>
			</div>
			<div>
				<Link to='sign-in' style={linkStyle}>Sign In</Link>
			</div>
		</>
	)
	
	const alwaysOptions = (
		<>
			<div>
				<Link to='/dashboard' style={linkStyle}>
					Home
				</Link>
			</div>
		</>
	)

	return (
		<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to={user.token ? '/dashboard' : '/'} style={linkStyle}>
                Pescador
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user.token && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user.token ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
