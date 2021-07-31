import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './welcome.scss';

class Welcome extends Component {
    render() {
        return(
        <container>
        <Jumbotron className = "welcomeJumbo" >
            <div className = "welcomeTitle">Welcome to 
            <span className = "brandTitle"> Swift Tailor</span></div>
            <p>
                We are committed to help you finding your body shape to unlock your potential to look great and feel great!
            </p>
            <p>
                <Link to = "/scanner">
                    <Button variant="outline-primary" size = "lg">Get Started!</Button>
                </Link>
            </p>

        </Jumbotron>
        </container>
        )
    }

}

export default Welcome