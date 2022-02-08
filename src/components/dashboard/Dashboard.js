import classes from './Dashboard.module.css'
import DashboardIcon from './DashboardIcon'
import { BsPlusSquareFill, BsJournalBookmarkFill} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiWater } from 'react-icons/bi'

export default function Dashboard() {

    return (
        <div className={classes.Dashboard}>

            <div className={classes.DashboardIconDisplay}>
                <DashboardIcon title='Add A Trip' goesTo='/journal' >
                    <BsPlusSquareFill className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='My Waters' goesTo='/waters' >
                    <BiWater className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='Weather' goesTo='/weather' >
                    <TiWeatherPartlySunny className={classes.icon}/>
                </DashboardIcon>
                <DashboardIcon title='Journal' goesTo='/journal' >
                    <BsJournalBookmarkFill className={classes.icon}/>
                </DashboardIcon>
            </div>

            <div className={classes.CurrentConditions}>
                <h3>Current Conditions at Favorite</h3>
                <p>Favorite river information</p>
            </div>

            <div className={classes.WeatherDisplay}>
                <h3>Weather Display</h3>
                <p>Current and forecast weather conditions</p>
            </div>

        </div>
    )
}