# Pescador 2 - React Refactor - Client

A water and weather condition dashboard and journal for anglers of all styles.

PEN to MERN + GraphQL refactor of my first full stack application.

## About

Pescador provides a single resource to get all of the information an angler could want about their waterways and weather.

Unauthenticated users will be able to enter a zip code or county name to receive weather and conditions at nearby streams, lakes, and ponds. Users who create accounts and log in will be able to create favorite waterways as "Waters". These waters will collect a list of user chosen data sites in order to be quickly accessed. These waters and sites can be connected to trips that will track sites visited, date, weather and water conditions, and fish caught.

## Tech Stack

React | MongoDB | Node | Express | Apollo GraphQL | Recharts | MapBox

APIs: US Geological Survey Water Data, MapQuest GeoCoding, OpenWeather, FIPS County Code

## User Story

I am an angler who fishes in the US.

I need to see current and past data for specific waterways - namely: streamflow, gage height, lake height above datum, surface temp where available.
    - I would like this data presented in a dynamic graph
I need to see past, current, and forecast weather information for a selected area.
    - I would like to access weather maps - radar, wind speed/direction
I need to log fishing trips and subsequent catches
