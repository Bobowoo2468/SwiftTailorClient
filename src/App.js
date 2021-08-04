import React from 'react';
import './App.css';
import Navbar from './components/nav';
import Video from './components/video';
import Intro from './components/intro';
import Scanner from './components/scanner';
import Bodyshape from './components/bodyshape';
import FemaleHourglass from './components/bodyshapes/female-hourglass';
import FemaleApple from './components/bodyshapes/female-apple';
import FemalePear from './components/bodyshapes/female-pear';
import FemaleRectangle from './components/bodyshapes/female-rectangle';
import FemaleInvertedTriangle from './components/bodyshapes/female-inverted-triangle';
import MaleOval from './components/bodyshapes/male-oval';
import MaleTriangle from './components/bodyshapes/male-triangle';
import MaleRectangle from './components/bodyshapes/male-rectangle';
import MaleTrapezoid from './components/bodyshapes/male-trapezoid';
import MaleInvertedTriangle from './components/bodyshapes/male-inverted-triangle';
import Shop from './components/shop';
// import Aboutus from './components/aboutus';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact> <Intro/> <Video/></Route>
        <Route path = '/scanner' exact> <Scanner/> </Route>
        <Route path = '/body-shapes' exact> <Bodyshape/></Route>
        <Route path = '/body-shapes/female-rectangle' exact> <FemaleRectangle/> </Route> 
        <Route path = '/body-shapes/female-apple' exact> <FemaleApple/> </Route> 
        <Route path = '/body-shapes/female-inverted-triangle' exact> <FemaleInvertedTriangle/> </Route> 
        <Route path = '/body-shapes/female-hourglass' exact> <FemaleHourglass/> </Route> 
        <Route path = '/body-shapes/female-pear' exact> <FemalePear/> </Route> 
        <Route path = '/body-shapes/male-oval' exact> <MaleOval/> </Route> 
        <Route path = '/body-shapes/male-triangle' exact> <MaleTriangle/> </Route> 
        <Route path = '/body-shapes/male-rectangle' exact> <MaleRectangle/> </Route> 
        <Route path = '/body-shapes/male-trapezoid' exact> <MaleTrapezoid/> </Route> 
        <Route path = '/body-shapes/male-inverted-triangle' exact> <MaleInvertedTriangle/> </Route> 
        <Route path = '/shop' exact> <Shop/> </Route>
        {/* <Route path = '/about-us' exact> <Aboutus/> </Route> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
