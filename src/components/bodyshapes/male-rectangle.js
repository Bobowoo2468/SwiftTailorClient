import React from 'react';
import './male-bodyshape.css'

export default function MaleRectangle(){
    return (
    <>
        <div className = "mn male rectangle">
            <div className = "type-name">
                <h1>
                <span>Rectangle</span>
                Washboard
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
                    <span>With shoulders in <b>perfect alignment down the waist and hips</b>, rectangles fall into the problem of looking boxy when dressing without an intention.</span>
                    <span>Therefore, the key in dressing is to <b>widen the shoulders</b> and create the effect of a <b>subtle taper</b> from the shoulder-down. This creates an <b>illusion of structure</b>.</span>
                </div>

                <div className = "separator"></div>

                <h1>Tops</h1>

                <div className = "tops">

                    <div className = "top">
                        <h3>Breton tee</h3>
                        <img src = "../male-rectangle-breton.jpg" alt = ""/>
                        <h4>Horizontal stripes visually widens the upper body and adds bulk for a tapered look.</h4>
                    </div>

                    <div className = "top">
                        <h3>Patterns and prints</h3>
                        <img src = "../male-rectangle-prints.webp" alt = ""/>
                        <h4>Creates dimension to an otherwise straight silhouette and draws attention on top.</h4>
                    </div>
                    
                    <div className = "top">
                        <h3>Turtleneck</h3>
                        <img src = "../male-rectangle-turtleneck.webp" alt = ""/>
                        <h4>High necks draw attention away from the neck and give the illusion of a wider chest.</h4>
                    </div>

                    <div className = "top">
                        <h3>Flannel</h3> 
                        <img src = "../male-rectangle-flannel.webp" alt = ""/>
                        <h4>Solid-coloured tee with a layered over flannel shirt adds extra bulk to the upper body.</h4>   
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Bottoms</h1>

                <div className = "bottoms">

                    <div className = "bottom">
                        <h3>Skinny</h3>
                        <img src = "../male-rectangle-skinny.webp" alt = ""/>
                        <h4>Illusion of slim legs indirectly gives a broader touch to the shoulders.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Cuffed</h3>
                        <img src = "../male-rectangle-cuffed.webp" alt = ""/>
                        <h4>Add substance and shape to the lower half of the body. Fitting well is a must so as to maintain balance.</h4>
                    </div>
                    
                    <div className = "bottom">
                        <h3>Light-coloured chinos</h3>
                        <img src = "../male-rectangle-chinos.webp" alt = ""/>
                        <h4>Classic chinos that visually draw attention to the lower half. Go for a slim/skinny fit to create a V-taper illusion.</h4>
                    </div>

                    <div className = "bottom">
                        <h3>Cargo trousers</h3>
                        <img src = "../male-rectangle-cargo.webp" alt = ""/>
                        <h4>Provides extra bulk instantly to the lower half. Go for slim-cut to avoid excess fabric that makes the look sloppy.</h4>    
                    </div>                                            

                </div>

                <div className = "separator"></div>

                <h1>Accessories</h1>

                <div className = "accessories">

                    <div className = "accessory">
                        <h3>Belt</h3>
                        <img src = "../male-rectangle-belt.jpg" alt = ""/>
                        <h4>Accentuates the waist and provides a subtle V-tapered look.</h4>
                    </div>

                    <div className = "accessory">
                        <h3>Scarf</h3>
                        <img src = "../male-rectangle-scarf.jpg" alt = ""/>
                        <h4>Fleshes out the upper torso and provides extra bulk when neatly tied or draped. (Applicable in cold weather)</h4>
                    </div>
                    
                    <div className = "accessory">
                        <h3>Pocket square</h3>
                        <img src = "../male-rectangle-pocket.jpg" alt = ""/>
                        <h4>Detailing near the chest draws attention to the chest.</h4>
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