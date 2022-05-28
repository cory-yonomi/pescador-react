import { Link } from "react-router-dom"
import { Container, Row } from "react-bootstrap"

const homeStyle = {
    position: "relative",
    marginLeft: "20%",
}

const Home = (props) => {

    return (
        <>
           <Container style={homeStyle}>
                <Row>
                    <h1>Pescador</h1>
                    <h4>The Angler's Best Friend</h4>
                </Row>
                <button>
                    <Link to="/sign-in">Log In</Link>
                </button>
                <button>
                    <Link to="/sign-up">Create Account</Link>
                </button>
            </Container>
            <Container>
                <h3>Find current conditions for your area:</h3>
                <Link to="/search"><button>Go</button></Link>
            </Container> 
        </>
    )
}

export default Home
