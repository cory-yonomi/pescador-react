import { Link } from "react-router-dom";
import styles from './Home.module.css'

const Home = (props) => {
    return (
        <>
            <div className={styles.Home}>
                <div className={styles.Row}>
                    <div>
                        <h1 className={styles.Title}>Pescador</h1>
                        <h4>Weather and conditions at your fingertips</h4>
                    </div>
                    <Link to="/sign-in">
                        <button className={styles.Button}>Log In</button>
                    </Link>
                    <Link to="/sign-up">
                        <button className={styles.Button}>Sign Up</button>
                    </Link>
                </div>
                <div className={styles.Row}>
                    <h3>Find current conditions for your area:</h3>
                    <Link to="/search">
                        <button className={styles.Button}>Go</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
