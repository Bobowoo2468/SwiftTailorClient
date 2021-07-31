import React from 'react';
import './male-bodyshape.css'

export default function MaleOval(){
    return (
    <>
        <div className = "mn male oval">
            <div className = "type-name">
                <h1>
                <span>Oval</span>
                Horizontally Blessed
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
                    <span>As the majority of your mass is concentrated at the centre of your body, making your <b>arms, shoulders and legs look disproportionately slim</b>.</span>
                    <span>Therefore the goal in dressing is to make your body appear more defined by <b>adding shape to your shoulders</b> and <b>visually lengthening your torso</b>.</span>
                </div>

                <div className = "separator"></div>

                <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>V-neck</h3>
                        <img src = "../male-oval-vneck.jpg" alt = ""/>
                        <h4>Elongates the face and neckline, thus visually concealing these thicker rounded parts.</h4>
                    </div>

                    <div className = "top">
                        <h3>Button-ups with spread collar</h3>
                        <img src = "../male-oval-buttonup.jpeg" alt = ""/>
                        <h4>Widely spread collar points balances out a broader face and neck.</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Vertical pin-stripes</h3>
                        <img src = "../male-oval-pinstripe.webp" alt = ""/>
                        <h4>Vertical lines help to elongate the torso and slim down your appearance.</h4>
                    </div>

                    <div className = "top">
                        <h3>Dark-hued Henleys</h3> 
                        <img src = "../male-oval-henley.webp" alt = ""/>
                        <h4>Darker tones are slimming, coupled with solid-coloured T-shirts that draw attention away from the torso.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Straight-legged</h3>
                        <img src = "../male-oval-straight.webp" alt = ""/>
                        <h4>Balances out the proportions of your legs and torso.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Dark denims</h3>
                        <img src = "../male-oval-darkdenims.webp" alt = ""/>
                        <h4>Harmonises colours between the top and bottom, especially for short and stout men. Elongates the legs with lower hemlines.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Light-coloured Chinos</h3>
                        <img src = "../male-oval-chinos.jpg" alt = ""/>
                        <h4>Shorts that do not go past the knees keep the lower body proportioned. Light colours draw attention away from the chunkier midriff.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Light-fabric trousers</h3>
                        <img src = "../male-oval-trousers.jpg" alt = ""/>
                        <h4>Prevents bulk in the body and drapes nicely over the body to create a well-balance silhouette.</h4>    
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
                        <h3>Wide tie</h3>    
                        <img src = "../male-oval-tie.png" alt = ""/>
                        <h4>Coupled with thick knots such as the Windsor knot, complements a broad chest and torso nicely.</h4>
                    </div>                                            

                </div>                                  
            </div>

            <div className = "separator"></div>     

        </div>
    </>
    );
}