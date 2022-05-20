import React, {useState} from "react"
import SearchBar from "../shared/SearchBar";

const Search = () => {
    const [searchBy, setSearchBy] = useState(null)
    

    return (
        <>
            <div>
                <h3>Get Your Local Conditions</h3>
                <p>Choose Your Search:</p>
                <div>
                    <button onClick={()=> setSearchBy('county')}>County Name</button>
                    <button onClick={()=> setSearchBy('zip')}>Zip Code</button>
                    <button onClick={()=> setSearchBy('coords')}>Long + Lat</button>
                </div>
            </div>
            <div>
                <SearchBar formStyle={searchBy} />
            </div>
        </>);
};

export default Search;
