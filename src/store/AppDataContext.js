import { createContext, useState } from 'react'

const AppDataContext = createContext()

export function AppDataProvider({children}){
    const [userWaters, setUserWaters] = useState([])
    const [selectedWater, setSelectedWater] = useState({})
    const [waterStations, setWaterStations] = useState([])
    const [foundStations, setFoundStations] = useState([])


    return(
        <AppDataContext.Provider value={{
                userWaters: userWaters,
                setUserWaters: setUserWaters,
                selectedWater: selectedWater,
                setSelectedWater: setSelectedWater,
                waterStations: waterStations,
                setWaterStations: setWaterStations,
                foundStations: foundStations,
                setFoundStations: setFoundStations
            }
        }>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppDataContext