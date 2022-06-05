import React from "react";
import classes from "./Stations.module.css";


const Station = ({ station, provideData, children }) => {

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
            {provideData && station.flowRate && `Flow: ${station.flowRate} ft³/s  `}
            {provideData && station.gageHt && `Gage height: ${station.gageHt} ft`}
            {children}
        </div>
    );
};

export default Station;
