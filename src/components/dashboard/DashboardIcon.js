import classes from './Dashboard.module.css'
import { Link } from 'react-router-dom'

export default function DashboardIcon({title, goesTo, icon, children}) {
    return (
        <>
            <Link to={goesTo}>
                <div className={classes.DashboardIcon}>
                    {children}
                    <p>{title}</p>
                </div>
            </Link>
        </>
    )
}