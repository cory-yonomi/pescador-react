import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import classes from './Waters.module.css'
import WaterCard from './WaterCard'

const WatersDisplay = ({ waters, addClickHandler }) => {

  const allWaters = waters.map(water => {
    return (
      <WaterCard water={water} key={water._id}/>
    )
  })

  return (
      <div className={classes.WatersDisplay}>
          <h2>My Waters</h2>
          {allWaters}
          <BsPlusSquareFill
              className={classes.icon}
              onClick={addClickHandler}
          />
      </div>
  )
}

export default WatersDisplay