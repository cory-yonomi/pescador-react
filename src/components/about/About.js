import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className="container">
        <div className={styles.aboutTitle}>
            <h3>About the Project</h3>
        </div>
        <p>
            Pescador is a passion project and portfolio piece focused on creating a single resource that can provide all the information and
            tools that an angler could want, short of tying their knots. Pescador is purposefully built without social aspects to promote conservation and
            a focus on the sport itself. Often times in search of social media clout fish are mishandled, remote and pristine spots
            are given away and overrun, and people are cruel to each other. While there can also be a load of positivity to it, we'll
            leave that to the Gram for now. 
        </p>
        <p>
            This app is a full stack application built with React and Express. It leverages Mapbox GL, Recharts.js, MapQuest API, OpenWeatherMap API, and the USGS Water
            Values Service to provide current conditions for weather and water. Pescador employs a MongoDB database and GraphQL to provide
            authenticated users additional tools for cataloguing trips and catches, and keeping collections of measuring sites for up to the minute
            conditions. Account creation and sign in is temporarily disabled for development. 
        </p>
        <p>
            Current Features:
            <ul>
                <li>United States freshwater information</li>
                <li>Current and 3 hour forecast weather</li>
                <li>Current and 3 days prior of water conditions</li>
            </ul>
            In Development:
            <ul>
                <li>Authenticated user functionality (journals, station collection)</li>
                <li>Saltwater conditions + tides</li>
                <li>Custom waypoints for collections</li>
                <li>Tackle library</li>
            </ul>
        </p>
        <p>Repos: <a href="https://github.com/ornery-mouse/pescador-react">Client</a> | <a href="https://github.com/ornery-mouse/pescador-graphql-api">Server</a></p>
        <p>Open to contributors and suggestions!</p>
    </div>
  )
}

export default About