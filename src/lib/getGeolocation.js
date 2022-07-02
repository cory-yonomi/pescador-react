export default function getGeolocation(setPosition) {
    

    navigator.geolocation.getCurrentPosition(
        // if the user allows access to geolocation, add it to state and trigger
        // render of map and weather using geolocation data
        function (pos) {
            setPosition([pos.coords.latitude, pos.coords.longitude])
        },
        // if the user does not allow access, keep state null and trigger
        // render of SearchComponent
        function (error) {
            setPosition(['null']);
        }
    );
}
