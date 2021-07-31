import React from 'react';
import './female-bodyshape.css'

export default function FemaleHourglass(){
    return (
    <>
        <div className = "mn female hourglass">
            <div className = "type-name">
                <h1>
                <span>Hourglass</span>
                Runway Ready
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
                    <span>The hourglass has a defined waist and is already proportional.</span>
                    <span>Therefore, the key to dressing is to <b>follow its natural silhouette</b> by <b>accentuating the waist</b> and <b>proportionally dressing</b> the top and bottom.</span>
                </div>

                <div className = "separator"></div>
                
                <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>Wrap</h3>
                        <img src = "../female-hourglass-wraptop.webp" alt = ""/>
                        <h4>An adjustable belt is provided to accentuate your already defined waistline.</h4>
                    </div>

                    <div className = "top">
                        <h3>Peplum</h3>
                        <img src = "../female-hourglass-peplumtop.webp" alt = ""/>
                        <h4>Mirrors your natural shape well - a defined waist with volume in the shoulders and hips</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Keyhole</h3>
                        <img src = "../female-hourglass-keyholetop.webp" alt = ""/>
                        <h4>Provides a subtly sexy detail to draw attention to the midsection and bust.</h4>
                    </div>

                    <div className = "top">
                        <h3>V-neck</h3> 
                        <img src = "../female-hourglass-vnecktop.webp" alt = ""/>
                        <h4>A slimming neckline that draws attention towards your defined midsection.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Wide-legged</h3>
                        <img src = "../female-hourglass-widelegged.webp" alt = ""/>
                        <h4>Creates a silhouette that beautifully balances curvier hips and thighs.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Flowy</h3>
                        <img src = "../female-hourglass-flowy.webp" alt = ""/>
                        <h4>Accentuates your waist and leaves room for the curves of the hips.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Belted</h3>
                        <img src = "../female-hourglass-beltedpants.webp" alt = ""/>
                        <h4>Showcase your waist and draws attention with detailing on the belt.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Skinny</h3>
                        <img src = "../female-hourglass-skinny.webp" alt = ""/>
                        <h4>Has a close-fitting style shows off your natural curves.</h4>    
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Dresses</h1>

                <div className = "dresses">

                    <div className = "dress">
                        <h3>Sheath</h3>
                        <img src = "../female-hourglass-sheath.webp" alt = ""/>
                        <h4>Form-fitting dresses that flatter your natural figure.</h4>
                    </div>

                    <div className = "dress">
                        <h3>Jumpsuit</h3>
                        <img src = "../female-hourglass-jumpsuit.webp" alt = ""/>
                        <h4>Fine, not a dress, but they show off your curves and add some volume to the lower half.</h4>
                    </div>
                    
                    <div className = "dress">
                        <h3>Fit-and-flare</h3>
                        <img src = "../female-hourglass-fitandflare.webp" alt = ""/>
                        <h4>Highlights the waist and flows effortlessly from the waist down.</h4>
                    </div>

                    <div className = "dress">
                        <h3>Wrap</h3>    
                        <img src = "../female-hourglass-wrapdress.webp" alt = ""/>
                        <h4>An adjustable belt is provided to accentuate your already defined waistline.</h4>
                    </div>                                            

                </div>                                  
            </div>

            <div className = "separator"></div>            

        </div>
    </>
    );
}