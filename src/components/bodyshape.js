import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './bodyshape.css'

export default function Bodyshape(){

    const [toggleType, setToggleType] = useState(0);
    const [toggle, setToggle] = useState(false);

    function wrapper (num) {
        setHold(num);
        setType(num);
    }

    function setHold (num) {
        num === toggleType ? setToggle(!toggle) : setToggle(true);
    }

    function setType (num) {
        setToggleType(num)
    }

    return (
    <>
        <div className = "main-wrapper">
            <div className = "hero">
                Body Shapes
            </div>
            <div className = "type-group male">
                <h2 id = "males">Males</h2>
                <div className = "types">
                    <div className = "type" onClick = {() => wrapper(1)}>
                        <div className = "shadowimg"><img src = "triangle.png" alt = ""/></div>
                        <h4>Triangle</h4>
                        <h5>Larger around the waist and hips in relation to the top part of the body</h5>
                    </div>
                    <div className = "type" onClick = {() => wrapper(2)}>
                        <div className = "shadowimg"><img src = "inverted-triangle.png" alt = ""/></div>
                        <h4>Inverted Triangle</h4>
                        <h5>Well-developed chest and shoulders, significantly broader in comparison to tiny waist and hips</h5>
                    </div>
                    <div className = "type" onClick = {() => wrapper(3)}>
                        <div className = "shadowimg"> <img src = "oval.png" alt = ""/> </div>
                        <h4>Oval</h4>
                        <h5>Center of the torso is wider than the shoulders and hips</h5>
                    </div>
                    <div className = "type" onClick = {() => wrapper(4)}>
                        <div className = "shadowimg"><img src = "rectangle.png" alt = ""/></div>
                        <h4>Rectangle</h4>
                        <h5>A thin frame, with fairly uniform measurements</h5>
                    </div>
                    <div className = "type" onClick = {() => wrapper(5)}>
                        <div className = "shadowimg"><img src = "trapezoid.png" alt = ""/></div>
                        <h4>Trapezoid</h4>
                        <h5>Broad shoulders that steadily taper to a narrower waist</h5>
                    </div>
                </div>
                
                {(toggle && toggleType < 6)? ``: <div className = "emptydiv"></div>}

                {toggleType > 5 ? `` : 
                <div className = {toggle ? "showtoggle" : "hidetoggle"}>
                    <img src = {toggleType === 1 ? "male-triangle-1.jpg" :
                                toggleType === 2 ? "male-inverted-triangle-1.jpg":
                                toggleType === 3 ? "male-oval-1.png":
                                toggleType === 4 ? "male-rectangle-1.jpg":
                                toggleType === 5 ? "male-trapezoid-1.jpg":
                                ``}
                                style = {{height:300}}
                    alt = ""/>

                    <img src = {toggleType === 1 ? "male-triangle-2.jpg" :
                                toggleType === 2 ? "male-inverted-triangle-2.jpg":
                                toggleType === 3 ? "male-oval-3.png":
                                toggleType === 4 ? "male-rectangle-2.jpg":
                                toggleType === 5 ? "male-trapezoid-2.jpg":
                                ``}
                                style = {{height:300}}
                    alt = ""/>

                    <img src = {toggleType === 1 ? "male-triangle-3.jpg" :
                                toggleType === 2 ? "male-inverted-triangle-3.jpg":
                                toggleType === 3 ? "male-oval-2.jpg":
                                toggleType === 4 ? "male-rectangle-3.jpg":
                                toggleType === 5 ? "male-trapezoid-3.jpg":
                                ``}
                                style = {{height:300}}
                    alt = ""/>

                    <div className = "desc"> 
                                {toggleType === 1 ? "Emphasize your upper body and broaden your shoulders." :
                                toggleType === 2 ? "Balance is key. Show off those guns without looking like a cartoon character. Tailoring might be a necessity.":
                                toggleType === 3 ? "Stretch out and slim down your silhouette while building up your shoulders.":
                                toggleType === 4 ? "Create the illusion of broader shoulders and a slimmer waist to give the illusion of an athletic build.":
                                toggleType === 5 ? "The sky is your limit. Wear form-fitting clothes to show your natural lines.":
                                ""}
                    </div>

                    <Link to = {toggleType === 1 ? "/body-shapes/male-triangle" :
                                toggleType === 2 ? "/body-shapes/male-inverted-triangle":
                                toggleType === 3 ? "/body-shapes/male-oval":
                                toggleType === 4 ? "/body-shapes/male-rectangle":
                                toggleType === 5 ? "/body-shapes/male-trapezoid":
                                ``} className = "link">
                        <img src = "next icon.png" alt = ""/>
                            <p>Find out more!</p>
                    </Link>

                </div>
             }
            </div>
               

            <div className = "type-group female">
                <h2 id = "females">Females</h2>
                <div className = "types">
                    <div className = "type" onClick = {() => wrapper(6)}>
                        <div className = "shadowimg"><img src = "pear.png" alt = ""/></div>
                        <h4>Pear</h4>
                        <h5>Fuller hips and thighs, smaller shoulders and bust with a defined waist</h5>
                    </div>
                    <div className = "type" onClick = {() => wrapper(7)}>
                        <div className = "shadowimg"><img src = "inverted-triangle.png" alt = ""/></div>
                        <h4>Inverted Triangle</h4>
                        <h5>Broader shoulders and a larger bust, narrower hips and waist</h5>
                        {/* <div className = "dropdown-content" id = "female-invert">
                            <img src = "female-inverted-triangle-1.jpg" style = {{height:300}} alt = ""/>
                            <div className = "desc">Add curves to the hips and bottom while creating a more defined waist, and de-emphasising the upper body.</div>
                            <Link to = "/body-shapes/female-inverted-triangle" className = "link">
                                <img src = "next icon.png" alt = ""/>
                                <p>Find out more!</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className = "type" onClick = {() => wrapper(8)}>
                        <div className = "shadowimg"><img src = "apple.png" alt = ""/></div>
                        <h4>Apple</h4>
                        <h5>Slightly narrower shoulders and hips with a large bust and waist</h5>
                        {/* <div className = "dropdown-content" id = "female-apple">
                            <img src = "female-apple-1.jpg" style = {{height:300}} alt = ""/>
                            <img src = "female-apple-2.jpg" style = {{height:300}} alt = ""/>
                            <div className = "desc">De-emphasise the midsection and to create a more defined waist.</div>
                            <Link to = "/body-shapes/female-apple" className = "link">
                                <img src = "next icon.png" alt = ""/>
                                <p>Find out more!</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className = "type" onClick = {() => wrapper(9)}>
                        <div className = "shadowimg"><img src = "rectangle.png" alt = ""/></div>
                        <h4>Rectangle</h4>
                        <h5>Fairly uniform measurements, more straight than curvy</h5>
                        {/* <div className = "dropdown-content" id = "female-rectangle">
                            <img src = "female-rectangle-1.png" style = {{height:300}} alt = ""/>
                            <div className = "desc">Focus of this body shape should be on defining the waist by breaking up the rectangle.</div>
                            <Link to = "/body-shapes/female-rectangle" className = "link">
                                <img src = "next icon.png" alt = ""/>
                                <p>Find out more!</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className = "type" onClick = {() => wrapper(10)}>
                        <div className = "shadowimg"><img src = "Hourglass.png" alt = ""/> </div>
                        <h4>Hourglass</h4>
                        <h5>Shapely bust, defined waist, curves in the right places</h5>
                        {/* <div className = "dropdown-content" id = "female-hourglass">
                            <img src = "female-hourglass-1.jpg" style = {{height:300}} alt = ""/>
                            <img src = "female-hourglass-2.jpg" style = {{height:300}} alt = ""/>
                            <div className = "desc">Follow its natural silhouette by proportionally dressing the top and bottom of the body while accentuating the waist.</div>
                            <Link to = "/body-shapes/female-hourglass" className = "link">
                                <img src = "next icon.png" alt = ""/>
                                <p>Find out more!</p>
                            </Link>
                        </div> */}
                    </div>
                </div>
                {(toggle && toggleType > 5)? ``: <div className = "emptydiv"></div>}

                {toggleType < 6 ? `` : 
                <div className = {toggle ? "showtoggle" : "hidetoggle"}>
                    <img src = {toggleType === 6 ? "female-pear-1.jpg" :
                                toggleType === 7 ? "female-inverted-triangle-1.jpg":
                                toggleType === 8 ? "female-apple-1.jpg":
                                toggleType === 9 ? "female-rectangle-1.png":
                                toggleType === 10 ? "female-hourglass-1.jpg":
                                ``}
                                style = {{height:300}}
                    alt = ""/>

                    <img src = {toggleType === 6 ? "female-pear-2.jpg" :
                                toggleType === 7 ? "":
                                toggleType === 8 ? "female-apple-2.jpg":
                                toggleType === 9 ? "":
                                toggleType === 10 ? "female-hourglass-2.jpg":
                                ``}
                                style = {{height:300}}
                    alt = ""/>

                    <div className = "desc"> 
                                {toggleType === 6 ? "Emphasize your upper body and broaden your shoulders." :
                                toggleType === 7 ? "Balance is key. Show off those guns without looking like a cartoon character. Tailoring might be a necessity.":
                                toggleType === 8 ? "Stretch out and slim down your silhouette while building up your shoulders.":
                                toggleType === 9 ? "Create the illusion of broader shoulders and a slimmer waist to give the illusion of an athletic build.":
                                toggleType === 10 ? "The sky is your limit. Wear form-fitting clothes to show your natural lines.":
                                ""}
                    </div>

                    <Link to = {toggleType === 6 ? "/body-shapes/female-pear" :
                                toggleType === 7 ? "/body-shapes/female-inverted-triangle":
                                toggleType === 8 ? "/body-shapes/female-apple":
                                toggleType === 9 ? "/body-shapes/female-rectangle":
                                toggleType === 10 ? "/body-shapes/female-hourglass":
                                ``} className = "link">
                        <img src = "next icon.png" alt = ""/>
                            <p>Find out more!</p>
                    </Link>

                </div>
             }            
            </div> 
        </div>
    </>
    );
}