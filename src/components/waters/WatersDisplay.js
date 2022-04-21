import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import classes from './Waters.module.css'

const WatersDisplay = ({ waters, addClickHandler }) => {
  return (
    
                <div className={classes.WatersDisplay}>
                    <h2>My Waters</h2>
                    {waters.map(water => <p>{water.name}</p>)}
                    <BsPlusSquareFill
                        className={classes.icon}
                        onClick={addClickHandler}
                    />
                </div>
  )
}

export default WatersDisplay