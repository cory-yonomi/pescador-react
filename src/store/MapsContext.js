import React, { createContext, useState} from 'react'

const MapContext = createContext()

function MapsProvider({children}) {
    const [popupContent, setPopupContent] = useState(null)
    const [map, setMap] = useState(null)
    const [lngLat, setLngLat] = useState({lng: null, lat: null})

    return (
        <MapContext.Provider value={{
            popupContent,
            setPopupContent,
            map,
            setMap,
            lngLat,
            setLngLat
        }}>
            {children}
        </MapContext.Provider>
    )
}

export { MapsProvider, MapContext}