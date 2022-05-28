import React from "react";
import classes from "./Stations.module.css";


const Station = ({ station, children }) => {

    //borrowed title casing function(Greg Dean on StackOverflow)
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


    return (
        <div className={classes.StationDiv}>
            <p>
                {toTitleCase(station.name)}
            </p>
            {children}
        </div>
    );
};

export default Station;
