import classes from './Waters.module.css'
import { useParams } from 'react-router-dom'

export default function Waters() {

    const { action } = useParams()
    console.log('action:', action)
    
    if (!action) {
        
        return (
            <div className={classes.Waters}>
                <p>Waters</p>
            </div>
        )
     }
    
}