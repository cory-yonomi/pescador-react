import classes from './Dashboard.module.css'
import DashboardIcon from './DashboardIcon'

export default function Dashboard() {

    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashIconDisplay}>
                <DashboardIcon title='Add A Trip' goesTo=''/>
                <DashboardIcon title='My Waters' goesTo=''/>
                <DashboardIcon title='Weather' goesTo=''/>
                <DashboardIcon title='Journal' goesTo=''/>
            </div>
        </div>
    )
}