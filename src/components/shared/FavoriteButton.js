import React, {useContext} from "react"
import axios from "axios"
import AuthContext from "../../store/AuthContext"

const FavoriteButton = ({station}) => {
    const user = useContext(AuthContext).user


    const addFavoriteHandler = () => {
        console.log("user in favoriteHandler", user);
        axios({
            url: `http://localhost:8000/user/favorite`,
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

    return (
        <button onClick={addFavoriteHandler}>
            Make Favorite
        </button>
    )
};

export default FavoriteButton
