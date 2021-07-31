import React from 'react';
import './redirect.css';
import { Link } from 'react-router-dom';

export default function Redirect(props){
    
      return (
      <>
        <div className = "redirect">
          <div className = "caption">Your body shape is:</div>
          <div className = "type-name"> 
            {props.gender ? (
            props.bodyshape >= 4 ? `Oval` : 
            props.bodyshape >= 3 ? `Trapezoid` :
            props.bodyshape >= 2 ? `Rectangle` : 
            props.bodyshape >= 1 ? `Triangle` : 
            props.bodyshape === 0 ? `Inverted Triangle` : `Undef`
            ) :
            (
              props.bodyshape >= 4 ? `Apple` : 
              props.bodyshape >= 3 ? `Hourglass` :
              props.bodyshape >= 2 ? `Rectangle` : 
              props.bodyshape >= 1 ? `Pear` : 
              props.bodyshape === 0 ? `Inverted Triangle` : `Undef`
            )}
          </div>

          <div className = "ratios">
              <h3>Shoulder: {props.smeasure}</h3>
              <h3>Waist: {props.wmeasure}</h3>
              <h3>Hips: {props.hmeasure}</h3>
              <h3>Shoulder-to-waist ratio: {props.swratio}</h3>
              <h3>Waist-to-hips ratio: {props.whratio}</h3>
          </div>

          <div className = "info oneliner">
           {props.gender ? (
            props.bodyshape >= 4 ? `Horizontally Blessed` : 
            props.bodyshape >= 3 ? `Fashion Made Easy` :
            props.bodyshape >= 2 ? `Washboard` : 
            props.bodyshape >= 1 ? `Dad Bod` : 
            props.bodyshape === 0 ? `Greek God` : `Undef`
            ) :
            (
              props.bodyshape >= 4 ? `Gotta Love More Of You` : 
              props.bodyshape >= 3 ? `Runway Ready` :
              props.bodyshape >= 2 ? `Slim and Athletic` : 
              props.bodyshape >= 1 ? `Loving the Curves` : 
              props.bodyshape === 0 ? `Classy and Demure` : `Undef`
            )}
           </div>

          <div className = "info characteristic"> 
          {props.gender ? (
            props.bodyshape >= 4 ? `Center of the torso is wider than the shoulders and hips` : 
            props.bodyshape >= 3 ? `Broad shoulders that steadily taper to a narrower waist` :
            props.bodyshape >= 2 ? `A thin frame, with fairly uniform measurements` : 
            props.bodyshape >= 1 ? `Larger around the waist and hips in relation to the top part of the body` : 
            props.bodyshape === 0 ? `Well-developed chest and shoulders, significantly broader in comparison to tiny waist and hips` : `Undef`
            ) :
            (
              props.bodyshape >= 4 ? `Slightly narrower shoulders and hips with a large bust and waist` : 
              props.bodyshape >= 3 ? `Shapely bust, defined waist, curves in the right places` :
              props.bodyshape >= 2 ? `Fairly uniform measurements, more straight than curvy` : 
              props.bodyshape >= 1 ? `Fuller hips and thighs, smaller shoulders and bust with a defined waist` : 
              props.bodyshape === 0 ? `Broader shoulders and a larger bust, narrower hips and waist` : `Undef`
            )}
            </div>

          <div className = "separator"></div>

          <div className = "info advice">
          {props.gender ? (
            props.bodyshape >= 4 ? 
            <div>
            Narrow the bulkiest part of the torso to slim you down.
              <ul>
              <li>Go for traditional ‘slimming’ dark hues</li>
              <li>Create vertical lines to balance everything out</li>
              </ul>
            </div> : 

            props.bodyshape >= 3 ? 
            <div>
            Off-the-shelf fashion is usually tailored towards you.
              <ul>
              <li>No hard-and-fast rules to follow</li>
              <li>The only limitation is your bravery</li>
              </ul>
            </div> : 

            props.bodyshape >= 2 ? 
            <div>
              The main point of emphasis should be on the shoulders.
                <ul>
                <li>Avoid hard vertical stripes which run parallel to the body and reinforce a straight image</li>
                <li>Avoid looking like a plank by accessorising and creating volume on the shoulders</li>
                </ul>
            </div> : 

            props.bodyshape >= 1 ? 
            <div>
            Stylistically bulk up the upper-half given your ‘bottom-heavy’ appearance.
              <ul>
              <li>Go for traditional 'slimming' dark hues</li>
              <li>Avoid horizontal lines</li>
              </ul>
            </div> : 

            props.bodyshape === 0 ? 
            <div>
            Very top-heavy, therefore clothes that fit the shoulders tend to sag everywhere else.
              <ul>
              <li>Draw attention southwards with colourful accessories</li>
              <li>Make sure clothes are well-tailored</li>
              </ul>
            </div> : 

            `Undef`
            ) :

            (
              props.bodyshape >= 4 ? 
            <div>
            Accentuate your shoulders, bust while drawing the focus away from the midsection.
              <ul>
              <li>Balance your shoulders, bust, waist and hips</li>
              <li>Use lines to create curves, lengthen and emphasise your favourite parts of the body</li>
              <li>Choose darker-coloured hues for a 'slimming' effect</li>
              </ul>
            </div> : 

              props.bodyshape >= 3 ? 
              <div>
              Accentuate the well-defined waistline, proportional bust and hips. Rock your curves and flatter your figure.
                <ul>
                <li>Wear structured outfits that will look gorgeous on your frame</li>
                <li>Well-fitting clothes are the way to go</li>
                </ul>
              </div> : 

              props.bodyshape >= 2 ? 
              <div>
              Create the appearance of curves with colours and lines.
                <ul>
                <li>You get to choose which assets you want to play up</li>
                <li>Balance is key, with a voluminous top, balance it out with something fitted on the bottom</li>
                </ul>
              </div> : 

              props.bodyshape >= 1 ?
              <div>
              Create the illusion of volume on the upper body and draw attention towards a defined waistline.
                <ul>
                <li>Go for bright colors and prints for tops</li>
                <li>Go for slightly roomier cuts and darker colours to flatter the curviest part of your silhouette</li>
                </ul>
              </div> : 

              props.bodyshape === 0 ? 
              <div>
              Add volume near your hips to help balance your frame and accentuate your lower half.
                <ul>
                <li>Flared, looser jeans add volume and curves to your lower half</li>
                <li>Find structured pieces for dresses that already have a built-in shape</li>
                </ul>
              </div> : 

              `Undef`
            )}
           </div>

          <div className = "linkstyle">
          <Link to = {
            props.gender ? (
            props.bodyshape >= 4 ? `/body-shapes` : 
            props.bodyshape >= 3 ? `/body-shapes/male-trapezoid` :
            props.bodyshape >= 2 ? `/body-shapes/male-rectangle` : 
            props.bodyshape >= 1 ? `/body-shapes/male-triangle` : 
            props.bodyshape === 0 ? `/body-shapes/male-inverted-triangle` : `/body-shapes`
            ) :
            (
              props.bodyshape >= 4 ? `/body-shapes/female-apple` : 
              props.bodyshape >= 3 ? `/body-shapes/female-hourglass` :
              props.bodyshape >= 2 ? `/body-shapes/female-rectangle` : 
              props.bodyshape >= 1 ? `/body-shapes/female-pear` : 
              props.bodyshape === 0 ? `/body-shapes/female-inverted-triangle` : `/body-shapes`
            )
            } 
            >
                <button className = "button linkb"> 
                  <span>FIND OUT MORE</span>
                  <br/>
                  <i className = "fas fa-arrow-circle-right"/>
                </button>
            </Link>
            </div>
            <div className = "linkstyle">
            <Link to = '/shop'>
              <button className = "button shopb">
                <span>SHOP DIRECTLY</span>
              </button>
            </Link>
            </div>
        </div>
      </>
      )
}
