import React from 'react'
import { Link } from 'react-router-dom'

const WaterCard = ({water}) => {
  return (
    <Link to={`/waters/${water._id}`}>
        <div>
            <div>
                <h3>{water.name}</h3>
            </div>
            <div>
                <p>{water.type}</p>
            </div>
        </div>
    </Link>
  )
}

export default WaterCard