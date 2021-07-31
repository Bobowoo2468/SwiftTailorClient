import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './intro.css';
import './welcome.scss';


export default function Intro (){
    return (
    <>
        <div className = "intro">
            <div className = "intro-liner">
                <h1>LOVE YOUR BODY</h1> 
                <h2>ROCK YOUR STYLE</h2>
            </div>

            <div className = "welcomeContainer">
            <div className = "welcomeMessage">
                <div className = "welcomeTitle"> Welcome to 
                    <span> Swift Tailor</span>
                </div>

                <p>We are committed to help you finding your body shape to unlock your potential to look great and feel great!</p>

                <div className = "home-buttons">
                <Link to = "/scanner" className = "home-button">
                    <Button variant="outline-primary" size = "lg">Get started</Button>
                </Link>

                <Link to = "/body-shapes" className = "home-button">
                    <Button variant="outline-primary" size = "lg">Bodyshapes</Button>
                </Link>

                <div className = "separator"></div>

                <Link to = "/shop" className = "home-button">
                    <Button variant="outline-primary" size = "lg">Shop</Button>
                </Link>

                <Link to = "/about-us" className = "home-button">
                    <Button variant="outline-primary" size = "lg">About us</Button>
                </Link>               

                </div>
            </div>
            </div>
        </div>
    </>
    )
}