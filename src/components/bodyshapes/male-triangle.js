import React from 'react';
import './male-bodyshape.css'

export default function MaleTriangle(){
    return (
    <>
        <div className = "mn male triangle">
            <div className = "type-name">
                <h1>
                <span>Triangle</span>
                Dad Bod
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
                    <span><b>Narrow shoulders and chest</b>, and <b>wider waist and hips</b> makes the visual appearance of sloping shoulders. This is especially prevalent in older men.</span>
                    <span>Therefore, the key in dressing is to <b>improve the imbalance</b> of a <b>larger lower half</b> to make the entire body <b>look proportional</b>.</span>
                </div>

                <div className = "separator"></div>

                <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>Button-up</h3>
                        <img src = "../male-triangle-buttonup.webp" alt = ""/>
                        <h4>Streamline the torso which visually elongates a wide midriff.</h4>
                    </div>

                    <div className = "top">
                        <h3>Wide V-neck</h3>
                        <img src = "../male-triangle-vneck.webp" alt = ""/>
                        <h4>Visually increase shoulder-width and accentuates the chest.</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Shoulder-padded blazer</h3>
                        <img src = "../male-triangle-blazer.webp" alt = ""/>
                        <h4>Increases the shoulder-width to give proportion to the upperbody.</h4>
                    </div>

                    <div className = "top">
                        <h3>Jumpers</h3> 
                        <img src = "../male-triangle-jumper.webp" alt = ""/>
                        <h4>Coupled with chest detailing, it will help broaden the upper torso. A solid dark colour around the midsection conceals the wide lower torso.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Flared</h3>
                        <img src = "../male-triangle-flared.webp" alt = ""/>
                        <h4>Conceal large thighs and balance out large hips.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Straight-legged chinos</h3>
                        <img src = "../male-triangle-chinos.webp" alt = ""/>
                        <h4>Gives a leaner look to the legs and applies a slimming effect.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Faded denim</h3>
                        <img src = "../male-triangle-faded.webp" alt = ""/>
                        <h4>Faded portion to be below to knee so as not to draw attention to the wide torso and hips.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Joggers</h3>
                        <img src = "../male-triangle-joggers.webp" alt = ""/>
                        <h4>A fitted pair gives a relaxed and athletic look.</h4>    
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Accessories</h1>

                <div className = "accessories">

                    <div className = "accessory">
                        <h3>Large watches</h3>
                        <img src = "../male-oval-watch.jpg" alt = ""/>
                        <h4>Proportional to a larger frame.</h4>
                    </div>

                    <div className = "accessory">
                        <h3>Narrow-toed shoes</h3>
                        <img src = "../male-oval-narrowtoe.jpg" alt = ""/>
                        <h4>Visually elongates the legs to balance out a wider midriff.</h4>
                    </div>
                    
                    <div className = "accessory">
                        <h3>Suspenders</h3>
                        <img src = "../male-oval-suspenders.webp" alt = ""/>
                        <h4>Instead of a belt which divides the body into half and emphasises the belly, suspenders creates a better silhouette whilst providing support.</h4>
                    </div>

                    <div className = "accessory">
                        <h3>Colorful tie</h3>    
                        <img src = "../male-triangle-tie.jpg" alt = ""/>
                        <h4>Draws attention upwards towards your shoulders and minimise the appearance of weight on the waist.</h4>
                    </div>                                            

                </div>                                  
            </div>

            <div className = "separator"></div>     

        </div>
    </>
    );
}