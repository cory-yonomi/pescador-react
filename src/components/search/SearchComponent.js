import React, {useState} from 'react'
import SearchBar from '../shared/SearchBar'
import styles from './Search.module.css'

const SearchComponent = ({setLoading, setShowSearch}) => {

    const [searchBy, setSearchBy] = useState(null)


  return (
    <div>
        <div className={styles.SearchHeader}>
            <p>Choose Your Search:</p>
            <div>
                <button onClick={()=> setSearchBy('zip')}>Zip Code</button>
                <button onClick={()=> setSearchBy('coords')}>Long + Lat</button>
            </div>
        </div>
        <div className={styles.SearchBar}>
            <SearchBar 
                formStyle={searchBy} 
                setLoading={setLoading} 
                setShowSearch={setShowSearch} 
            />
        </div>
    </div>
  )
}

export default SearchComponent