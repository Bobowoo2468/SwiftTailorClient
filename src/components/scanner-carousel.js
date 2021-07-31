import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './scanner-carousel.scss';


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style = {{zIndex: 0}}>
        <Carousel.Item interval = {1000}>
          <img
            className="d-block w-100"
            src= {props.toggle ? "exampleman.jpg" : "./examplewoman.jpg"}
            alt="Example"
          />
          <Carousel.Caption className = 'carousel-caption'>
            <h5>Example Image</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval = {1000}>
          <img
            className="d-block w-100"
            src= {props.toggle ? "./exampleman.jpg" : "examplewoman.jpg"}
            alt="Second slide"
          />
  
          <Carousel.Caption className = 'carousel-caption'>
            <h5>Example Image</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel