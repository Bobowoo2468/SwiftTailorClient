import React from 'react';
import './female-bodyshape.css'

export default function FemaleRectangle(){
    return (
    <>
        <div className = "mn female rectangle">
            <div className = "type-name">
                <h1>
                <span>Rectangle</span>
                Slim and Athletic
                </h1>
            </div>
            <div className = "type-intro">Flatter your figure with the right fit. The sky's your ceiling.</div>

            <div className = "separator"></div>

            <div className = "golden-rules-intro">
                3 Golden Rules To Dress By:
            </div>
            <div className = "golden-rules">
                <div className = "rule">
                    <h1>
                        Keep it Balanced
                    </h1>
                    <div className = "rule-desc">Use your outfit to conceal and balance out large imperfections.</div>
                </div>

                <div className = "rule">
                    <h1>
                        Appeal to the Eye
                    </h1>
                    <div className = "rule-desc">Use lines to draw the eye's attention, so as to create voluminising effects, or lengthening and slimming effects.</div>
                </div>

                <div className = "rule">
                    <h1>
                        Apply the Palette
                    </h1>
                    <div className = "rule-desc">Draw the eye's attention with bright, pastel colours and divert attention away with darker solid colours.</div>
                </div>
            </div>

            <div className = "separator"></div> 

            <div className = "specific-desc">
                <div className = "overview">
                    <h1>Overview</h1>
                    <span>The upper and lower parts of the body of a rectangle are well-proportioned.</span>
                    <span>Therefore, the focus should be to <b>define the waist</b> and <b>break up the rectangle</b>.</span>
                    <span>If you are very slender and want to create more curves, visually add more volume to the upper body and the lower body, and leave the waist as it is.</span>
                    <span>Otherwise, visually pull in the waist and leave the upper and lower body as it is.</span>
                </div>

            <div className = "separator"></div>
            
            <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>Ruffle/Gigot Sleeve</h3>
                        <img src = "../female-rectangle-ruffles.webp" alt = ""/>
                        <h4>Details like ruffles, frills, bows, pleating add volume and interest to the bust.
                            Gigot sleeves create more volume on the shoulder, which adds more shape.
                        </h4>
                    </div>

                    <div className = "top">
                        <h3>Scoop Neck/Puff Sleeve</h3>
                        <img src = "../female-rectangle-puff.webp" alt = ""/>
                        <h4>Round necklines are flattering to the rectangle as it creates curves.</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Belted/V-neck</h3>
                        <img src = "../female-rectangle-print.webp" alt = ""/>
                        <h4>This top adds volume to the hip line with the flare while creating a waist with the belt.
                            Darker colour belts adds a further slimming effect.
                            Opt for a V neckline to visually lengthen the shoulder and bust area.
                        </h4>
                    </div>

                    <div className = "top">
                        <h3>Straight-cut Blazer</h3> 
                        <img src = "../female-rectangle-straightblazer.webp" alt = ""/>
                        <h4>Hangs nicely on a rectangle, and follows the natural silouhette of the body.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Low-rise Bootcut</h3>
                        <img src = "../female-rectangle-lowrisebootcut.webp" alt = ""/>
                        <h4>Bootcut flares slightly at the bottom, which adds the right amount of volume 
                            to your lower half whilst softening the squarish body frame.
                            Low-rise so that it does not unnecessarily highlight the waist.
                        </h4>
                    </div>

                    <div className = "bottom">
                        <h3>Cargo Pants</h3>
                        <img src = "../female-rectangle-cargo.webp" alt = ""/>
                        <h4>The hip, thigh details such as pockets and chains create further interest on the lower body.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Flared hemline</h3>
                        <img src = "../female-rectangle-flared.webp" alt = ""/>
                        <h4>Like cargo pants, flared hemlines, details and bright colours help to create volume.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Patterns</h3>
                        <img src = "../female-rectangle-pattern.webp" alt = ""/>
                        <h4>Patterns and any form of embellishment add interest to the lower half of your body.</h4>    
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Dresses</h1>

                <div className = "dresses">

                    <div className = "dress">
                        <h3>Wrap</h3>
                        <img src = "../female-rectangle-wrap.webp" alt = ""/>
                        <h4>Wrap dress creates the illusion of curves, as it draps nicely on a straight body, and defines the waist.</h4>
                    </div>

                    <div className = "dress">
                        <h3>Color Blocking</h3>
                        <img src = "../female-rectangle-colorblocking.webp" alt = ""/>
                        <h4>When the dress has color blocks with strong contrast with one another, 
                            it naturally leads people to believe you naturally got those contrast and thus breaks up the rectangle.</h4>
                    </div>
                    
                    <div className = "dress">
                        <h3>Fit-and-flare</h3>
                        <img src = "../female-rectangle-fitandflare.webp" alt = ""/>
                        <h4>Fit-and-flare is more suitable for rectangles with a more defined waist.
                            The flare helps to create more shape.
                        </h4>
                    </div>

                    <div className = "dress">
                        <h3>Shift</h3>    
                        <img src = "../female-rectangle-shift.webp" alt = ""/>
                        <h4>While you want to stay away from baggy or shapeless garments, a shift dress is an exception
                            due to its clean lines and tailoring.</h4>
                    </div>                                            

                </div>                                  
            </div>

            <div className = "separator"></div>

        </div>
    </>
    );
}