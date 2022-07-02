import { createContext, useState } from 'react'

const AppDataContext = createContext()

export function AppDataProvider({children}){
    const [userWaters, setUserWaters] = useState(null)
    const [selectedWater, setSelectedWater] = useState(null)
    const [waterStations, setWaterStations] = useState(null)
    const [foundStations, setFoundStations] = useState(null)
    const [position, setPosition] = useState(null)
    const [weather, setWeather] = useState(null)


    return(
        <AppDataContext.Provider value={
            {
                userWaters: userWaters,
                setUserWaters: setUserWaters,
                selectedWater: selectedWater,
                setSelectedWater: setSelectedWater,
                waterStations: waterStations,
                setWaterStations: setWaterStations,
                foundStations: foundStations,
                setFoundStations: setFoundStations,
                position: position,
                setPosition: setPosition,
                weather: weather,
                setWeather: setWeather
            }
        }>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppDataContext