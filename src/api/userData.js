import apiUrl from '../apiConfig'
import axios from 'axios'

export function getDashboardData(user) {
    return axios({
        url: `${apiUrl}/waterData/site/${user.favoriteStation.usgsId}`,
        method: 'GET',
        headers: {
            authorization: `Bearer Token ${user.token}`
        }
    })
}

export function makeFavoriteStation(user, station) {
    return axios({
        url: `${apiUrl}/user/favorite`,
        method: "POST",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
        data: {
            stationId: `${station._id}`,
        },
    })
}