import React, { useState } from "react"
import { gql, useMutation } from '@apollo/client'

const CreateProfile = ({ user }) => {
	// *** COMPONENT STATES ***
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [zipCode, setZipCode] = useState("")
    const [fishingStyle, setFishingStyle] = useState("")
    
    // *** GRAPHQL FUNCTIONS ***
    const CREATE_PROFILE = gql`
    mutation createProfile($firstName: String!, $lastName: String, $zipCode: Int!, $style: String!, $userId: ID){
        createProfile(firstName: $firstName, lastName: $lastName, zipCode:  $zipCode, style: $style, userId: $userId){
            firstName
            style
        }
    }
    `

    const [createProfile] = useMutation(CREATE_PROFILE, {
        variables: {
            firstName: firstName,
            lastName: lastName,
            zipCode: parseInt(zipCode),
            style: fishingStyle,
            userId: user._id
        }
    })


	// *** FORM FUNCTIONS ***
	const firstNameInput = (event) => {
		setFirstName(event.target.value)
	}

	const lastNameInput = (event) => {
		setLastName(event.target.value)
	}

	const zipCodeInput = (event) => {
		setZipCode(event.target.value)
	}

	const fishingStyleInput = (event) => {
		setFishingStyle(event.target.value)
	}

    const submitHandler = event => {
        event.preventDefault()
        createProfile()
        
    }

	return (
		<>
			<form onSubmit={submitHandler}>
				<label htmlFor="firstName">First Name:</label>
				<input type="text" id="firstName" onChange={firstNameInput} />
				<label htmlFor="lastName">Last Name:</label>
				<input type="text" id="lastName" onChange={lastNameInput} />
				<label htmlFor="zipCode">Zip Code:</label>
				<input type="text" id="zipCode" onChange={zipCodeInput} />
				<label htmlFor="fishingStyle">Style:</label>
				<select
					name="fishingStyle"
					id="fishingStyle"
					onChange={fishingStyleInput}
				>
					<option value="">Select Style:</option>
					<option value="fly">Fly</option>
					<option value="conventional">Conventional</option>
                </select>
                <input type="submit" />
			</form>
		</>
	)
}

export default CreateProfile
