import React, {useState} from 'react';
import './scanner.css';
import ScanStepper from './stepper';
import Loading from './loading';


export default function Scanner() {
    const [toggle, setToggle] = useState(false);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [shapeloading, setShapeloading] = useState(false);
    const [shoulder, setShoulder] = useState(260);
    const [waist, setWaist] = useState(250);
    const [hips, setHips] = useState(240);
    const [bodyshape, setBodyshape] = useState(-1);
    const [smeasure, setSmeasure] = useState(0);
    const [wmeasure, setWmeasure] = useState(0);
    const [hmeasure, setHmeasure] = useState(0);
    const [swratio, setswratio] = useState(0);
    const [whratio, setwhratio] = useState(0);

    return(
        <>
        {shapeloading ? <Loading/> : null}
        <div className = {shapeloading ? "transparent" : null}>
        <img className = 'bg-img' src = {toggle ? './menbg.jpg': './womenbg.jpg'} alt = "background"/>
        <div className = 'contain'>
            <p className = {bodyshape === -1 ? 'welcomeText' : 'hidewelcomeText'}>
                <h1>Body Shape Scanner</h1>
                <p>Input your details to find out your body shape!</p>
            </p> 
            <div className = 'stepper'> 
                <ScanStepper 
                    setImage = {setImage}
                    setToggle = {setToggle}
                    setLoading = {setLoading}
                    setShapeloading = {setShapeloading}
                    setShoulder = {setShoulder}
                    setWaist = {setWaist}
                    setHips = {setHips}
                    setBodyshape = {setBodyshape}
                    setSmeasure = {setSmeasure}
                    setWmeasure = {setWmeasure}
                    setHmeasure = {setHmeasure}
                    setswratio = {setswratio}
                    setwhratio = {setwhratio}
                    toggle = {toggle} 
                    image = {image} 
                    loading = {loading}
                    shapeloading = {shapeloading}
                    shoulder = {shoulder}
                    waist = {waist}
                    hips = {hips}
                    bodyshape = {bodyshape}
                    smeasure = {smeasure}
                    wmeasure = {wmeasure}
                    hmeasure = {hmeasure}
                    swratio = {swratio}
                    whratio = {whratio}
                />
            </div>
        </div>
        </div>
        </>
    );
}