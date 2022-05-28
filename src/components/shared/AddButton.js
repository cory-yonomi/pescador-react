import React from "react"
import { useMutation, gql } from "@apollo/client"

const AddButton = ({ station, setWaterStations, water }) => {
    // ****************** GRAPHQL *********************
    const CREATE_STATION = gql`
        mutation AddWaterStation(
            $usgsId: String!
            $name: String!
            $long: Float!
            $lat: Float!
            $waterId: ID
        ) {
            createStation(
                name: $name
                usgsId: $usgsId
                long: $long
                lat: $lat
                waterId: $waterId
            ) {
                name
                usgsId
                long
                lat
            }
        }
    `;

    const [createStation] = useMutation(CREATE_STATION, {
        variables: {
            name: station.siteName,
            usgsId: station.siteId,
            long: station.siteLong,
            lat: station.siteLat,
            waterId: water._id,
        },
    });

    const clickHandler = (e) => {
        createStation();
        setWaterStations((prevState) => [
            ...prevState,
            {
                name: station.siteName,
                usgsId: station.siteId,
                long: station.siteLong,
                lat: station.siteLat,
                waterId: water._id,
            },
        ]);
    };

    return (
        <>
            <button onClick={clickHandler}>
              Add
            </button>
        </>
    );
};

export default AddButton;
