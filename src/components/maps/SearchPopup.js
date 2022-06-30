import React from 'react'

const SearchPopup = ({station}) => {
  return (
    <div>
        <div>{station.name}</div>
        <div>{station.flow}</div>
        <div>{station.height}</div>
    </div>
  )
}

export default SearchPopup