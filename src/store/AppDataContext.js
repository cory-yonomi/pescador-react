import { createContext, useState } from 'react'

const AppDataContext = createContext()

export function AppDataProvider({children}){
    const [userWaters, setUserWaters] = useState([])
    const [favoriteStation, setFavoriteStation] = useState([])
    const [selectedWater, setSelectedWater] = useState({})
    const [waterStations, setWaterStations] = useState([])
    const [foundStations, setFoundStations] = useState([])


    return(
        <AppDataContext.Provider value={{
                userWaters: userWaters,
                setUserWaters: setUserWaters,
                favoriteStation: favoriteStation,
                setFavoriteStation: setFavoriteStation,
                selectedWater: selectedWater,
                setSelectedWater: setSelectedWater
            }
        }>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppDataContext