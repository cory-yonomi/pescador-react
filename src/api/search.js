import apiUrl from '../apiConfig'
import axios from 'axios'

export function executeSearch(formStyle, zipInput, latInput, longInput) {
    return axios({
        method: 'post',
        url: `${apiUrl}/search/${formStyle}`,
        data: {
            search: {
                zip: zipInput,
                lat: latInput,
                long: longInput
            }
        }
    })
}

export function autoSearch(lat, lon) {
    return axios({
        method: 'post',
        url: `${apiUrl}/search/coords`,
        data: {
            search: {
                lat: lat,
                long: lon
            }
        }
    })
}

export function singleStationQuery(stationId) {
    return axios({
        method: 'get',
        url: `${apiUrl}/waterData/site/${stationId}`
    })
}