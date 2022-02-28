import { useParams } from 'react-router-dom'

import CreateWater from './CreateWater'
import classes from './Waters.module.css'

const Waters = ({ user }) => {

    const { action } = useParams()
    console.log('action:', action)
    
    if (!action) {
        
        return (
            <div className={classes.Waters}>
                <p>Waters</p>
                <CreateWater user={user} />
            </div>
        )
     }
    
}

export default Waters