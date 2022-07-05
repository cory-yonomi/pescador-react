import React from 'react'
import { IoChevronBackCircleSharp } from 'react-icons/io5'

const BackButton = ({ onClick }) => {
  return (
    <div onClick={()=>onClick()}>
        <IoChevronBackCircleSharp />
    </div>
  )
}

export default BackButton