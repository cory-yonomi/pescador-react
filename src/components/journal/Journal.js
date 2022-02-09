import React from 'react'
import { Image } from 'cloudinary-react'
import classes from './Journal.module.css'

const Journal = (props) => { 
    return (
        <>
            <Image publicID="sample" className={classes.Image}/>
        </>
    )
}
 
export default Journal