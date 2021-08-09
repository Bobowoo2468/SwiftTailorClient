import React from 'react';
import './adj.css';

export default function Adj (props){
      return (
    <>
        <div>
            <h1> Adjust your key positionings </h1>
            <h4> Adjust the height of the positioning by shifting the circles up and down</h4>
            <div className = "colour blue">
                <p className = "colourtext"> Shoulder</p>
                <p className = "colourcap">along the center of the ball of your shoulder</p>
            </div>
            <div className = "colour green">
                <p className = "colourtext">Waist</p>
                <p className = "colourcap">narrowest part along the waist</p>
            </div>
            <div className = "colour red">
                <p className = "colourtext">Hip</p>
                <p className = "colourcap colourhip">widest part on the hip</p>
            </div>
        </div>

        {props.image? 
        <div className = "sliderstyle">
        <label className = "slider-wrapper shoulder">
            <input 
                type = "range" 
                min = "0" 
                max = "500" 
                step = "1"
                defaultValue = "260"
                value = {props.shoulder}
                onChange = {e => props.setShoulder(e.target.value)}
            />
        </label> 

        
        <div className = "slider-wrapper waist">
            <input 
                type = "range" 
                min = "0" 
                max = "500" 
                step = "1"
                defaultValue = "250"
                value = {props.waist}
                onChange = {e => props.setWaist(e.target.value)}
            />
        </div> 

        <div className = "slider-wrapper hip">
            <input 
                type = "range" 
                min = "0" 
                max = "500" 
                step = "1"
                defaultValue = "240"
                value = {props.hips}
                onChange = {e => props.setHips(e.target.value)}
            />
        </div> 
        </div>
         : null }

        <div className = "examplewrapper">
            <p> test </p>
            <img src = "examplewoman.jpg" className = "postimage" alt = ""/>
            <div className = "shoulderline" style = {{bottom: `400px`}}/>
            <div className = "waistline" style = {{bottom: `324px`}}/>
            <div className = "hipsline" style = {{bottom: `265px`}}/>
        </div>
        <h6 className = "exampletext">Example Image</h6>
    
        
        <div className = "emptyDiv"></div>

        <div className = {props.image ? "imagewrapper" : "nilwrapper"}>
            <p>Image not uploaded</p>
            <img src = {props.image} className = "postimage" alt = ""/>
            <div className = "shoulderline" style = {{bottom: `${props.shoulder}px`}}/>
            <div className = "waistline" style = {{bottom: `${props.waist}px`}}/>
            <div className = "hipsline" style = {{bottom: `${props.hips}px`}}/>
        </div>
    </>
      )
}
