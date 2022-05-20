// **************** THIRD PARTY DEPENDENCIES ****************
import React, { useState, Fragment, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import { v4 as uuid } from 'uuid'

// **************** PESCADOR DEPENDENCIES ****************
import AuthContext from './store/AuthContext'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import Search from './components/search/Search'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Dashboard from './components/dashboard/Dashboard'
import Waters from './components/waters/Waters'
import Water from './components/waters/Water'
import Journal from './components/journal/Journal'

const App = () => {
	const user = useContext(AuthContext).user
	const setUser = useContext(AuthContext).setUser
	// **************** STATE ****************
	// const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	// **************** COMPONENT FUNCTIONS ****************
	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return prevState.filter((msg) => msg.id !== id)
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return [{ heading, message, variant, id }]
		})
	}

	return (
		<CloudinaryContext cloudName="cb-sorel-creative">
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home msgAlert={msgAlert} user={user} />} />
				<Route path="/search" element={<Search />} />
				<Route
					path="/sign-up"
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path="/sign-in"
						element={<SignIn msgAlert={msgAlert} />}
				/>
				<Route
					path="/sign-out"
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/change-password"
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<RequireAuth user={user}>
							<Dashboard msgAlert={msgAlert} user={user}/>
						</RequireAuth>
					}
				/>
				<Route
					path="/waters"
					element={
						<RequireAuth user={user}>
							<Waters msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/waters/:id"
					element={
						<RequireAuth user={user}>
							<Water msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/journal"
					element={
						<RequireAuth user={user}>
							<Journal msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/journal/:action"
					element={
						<RequireAuth user={user}>
							<Journal msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
			</Fragment>
		</CloudinaryContext>
	)
}

export default App
