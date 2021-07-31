import React from 'react';
import './card.css';

export default function Card (props) {
    return(
    <>
      <div className = "card-container">
      <a href = {props.weblink}>
        <div className = "img-container">
          <img src = {props.imglink} alt = ""/>
        </div>
        <div className = "content">
          <div className = "title">
             <h3>{props.name}</h3>
          </div>
          <div className = "body">
            <p>
              {props.bodyshape === 10 ? `Hourglass`:
              props.bodyshape === 9 ? `Rectangle`:
              props.bodyshape === 8 ? `Apple`:
              props.bodyshape === 7 ? `Inverted Triangle`:
              props.bodyshape === 6 ? `Pear`:
              props.bodyshape === 5 ? `Trapezoid`:
              props.bodyshape === 4 ? `Rectangle`:
              props.bodyshape === 3 ? `Oval`:
              props.bodyshape === 2 ? `Inverted Triangle`:
              props.bodyshape === 1 ? `Triangle`: `NA`}
            </p> 
            <p>
              {props.style === 3 ? `Formal`:
              props.style === 2 ? `Smart Casual`:
              props.style === 1 ? `Casual`: `NA`}
            </p>  

            <p>
              {props.price === 4 ? `$$$$`:
              props.price === 3 ? `$$$`:
              props.price === 2 ? `$$`:
              props.price === 1 ? `$`: `NA`}
            </p>
          </div>
        </div>
      </a>
    </div>
    </>
    )
}