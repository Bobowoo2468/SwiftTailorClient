import React from 'react';
import './female-bodyshape.css'

export default function FemaleInvertedTriangle(){
    return (
    <>
        <div className = "mn female inverted">
            <div className = "type-name">
                <h1>
                <span>Inverted Triangle</span>
                Classy and Demure
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
                    <span>Due to a <b>wide shoulder line</b>, the inverted triangle is <b>top-heavy</b>.</span>
                    <span>Therefore the goal in dressing is to create a <b>balanced silhouette</b> by <b>adding volume</b> to the <b>bottom</b>, creating a <b>defined waist</b> and <b>de-emphasising the top</b>.</span>
                </div>

                <div className = "separator"></div>

                <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>Scoop-neck</h3>
                        <img src = "../female-hourglass-wraptop.webp" alt = ""/>
                        <h4>A deep and narrow scoop-neck plays down the wide shoulders and/or bust and draws attention to the collarbone.</h4>
                    </div>

                    <div className = "top">
                        <h3>Peplum</h3>
                        <img src = "../female-hourglass-peplumtop.webp" alt = ""/>
                        <h4>Flares out gently from your natural waist, adding some curve to a less defined area and giving an illusion of a small waist. Adds some volume to the upper hip area.</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Halter</h3>
                        <img src = "../female-invert-halter.webp" alt = ""/>
                        <h4>Slims down the shoulder line and brings attention to the neck.</h4>
                    </div>

                    <div className = "top">
                        <h3>Asymmetric</h3> 
                        <img src = "../female-invert-asymmetric.webp" alt = ""/>
                        <h4>Break up the chest and visually reduce the width of the upper body.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Wide-legged</h3>
                        <img src = "../female-hourglass-widelegged.webp" alt = ""/>
                        <h4>Adds volume to the bottom thereby drawing attention from the shoulders to waist and legs.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Light-coloured cropped</h3>
                        <img src = "../female-invert-cropped.webp" alt = ""/>
                        <h4>A shorter hemline draws attention to the ankles and legs. Light colours have the effect of volumizing, thus balancing out your wider shoulders and upper body.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Boyfriend-styled</h3>
                        <img src = "../female-invert-boyfriend.webp" alt = ""/>
                        <h4>Baggy style creates curves around the hips.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Bootcut</h3>
                        <img src = "../female-invert-bootcut.webp" alt = ""/>
                        <h4>Classic piece that adds volume to the lower body.</h4>    
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Dresses</h1>

                <div className = "dresses">

                    <div className = "dress">
                        <h3>A-line</h3>
                        <img src = "../female-invert-aline.webp" alt = ""/>
                        <h4>Creates a balanced silhouette when a triangle-shaped dress meets an  inverted triangle frame.</h4>
                    </div>

                    <div className = "dress">
                        <h3>Jumpsuit</h3>
                        <img src = "../female-invert-jumpsuit.jpg" alt = ""/>
                        <h4>Fine, not a dress, but when coupled with the correct neckline, inverted triangles look amazing in jumpsuits given its wide-legged silhouette.</h4>
                    </div>
                    
                    <div className = "dress">
                        <h3>Fit-and-flare</h3>
                        <img src = "../female-hourglass-fitandflare.webp" alt = ""/>
                        <h4>Emphasises and slims down the waist and creates volume with a flared lower half.</h4>
                    </div>

                    <div className = "dress">
                        <h3>Pleated</h3>    
                        <img src = "../female-invert-pleated.jpg" alt = ""/>
                        <h4>Details on the lower part of the dress will draw the eye downwards and away from the shoulders.</h4>
                    </div>                                            

                </div>                                  
            </div>

            <div className = "separator"></div>     

        </div>
    </>
    );
}