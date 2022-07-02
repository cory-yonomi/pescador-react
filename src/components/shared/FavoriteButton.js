import React, {useContext} from "react"
import { makeFavoriteStation } from "../../api/userData";
import AuthContext from "../../store/AuthContext"

const FavoriteButton = ({station}) => {
    const user = useContext(AuthContext).user


    const addFavoriteHandler = () => {
        makeFavoriteStation(user, station)
    }

    return (
        <button onClick={addFavoriteHandler}>
            Make Favorite
        </button>
    )
};

export default FavoriteButton
