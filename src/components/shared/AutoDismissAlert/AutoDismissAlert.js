import { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

import './AutoDismissAlert.scss'

function AutoDismissAlert(props) {
	const [show, setShow] = useState(true)

	const { variant, heading, message, deleteAlert, id } = props

	const handleClose = () => setShow(false)

	useEffect(() => {
		let timeoutId = setTimeout(handleClose, 5000)

		if (show) {
			// eslint-disable-next-line no-unused-vars
			let deleteTimeout = setTimeout(() => {
				deleteAlert(id)
			}, 3000)
		}

		return function cleanup() {
			clearTimeout(timeoutId)
		}
	}, [id, show, deleteAlert])

	return (
		<Alert
				dismissible
				show={show}
				variant={variant}
				onClose={handleClose}>
				<div className='container'>
					<Alert.Heading>{heading}</Alert.Heading>
					<p className='alert-body'>{message}</p>
				</div>
			</Alert>
	)
}

// class AutoDismissAlert extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			show: true,
// 		}
// 		this.timeoutId = null
// 	}

// 	componentDidMount() {
// 		this.timeoutId = setTimeout(this.handleClose, 5000)
// 	}

// 	componentWillUnmount() {
// 		clearTimeout(this.timeoutId)
// 	}

// 	handleClose = () => this.setState({ show: false })

// 	render() {
// 		const { variant, heading, message, deleteAlert, id } = this.props

// 		// Delete this alert after the fade animation time (300 ms by default)
// 		if (!this.state.show) {
// 			setTimeout(() => {
// 				deleteAlert(id)
// 			}, 300)
// 		}

// 		return (
// 			<Alert
// 				dismissible
// 				show={this.state.show}
// 				variant={variant}
// 				onClose={this.handleClose}>
// 				<div className='container'>
// 					<Alert.Heading>{heading}</Alert.Heading>
// 					<p className='alert-body'>{message}</p>
// 				</div>
// 			</Alert>
// 		)
// 	}
// }

export default AutoDismissAlert
