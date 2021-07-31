import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './scanner.css'
import Toggle from './scanner-switch';
import Upload from './upload';
import Adj from './adj';
import ControlledCarousel from './scanner-carousel';
import Redirect from './redirect';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttons: {
  }
}));

function getSteps() {
  return ['Select your gender', 'Upload an image', 'Adjust your image'];
}

function getStepContent(stepIndex, props) {
  switch (stepIndex) {
    case 0:
      return <Toggle setToggle = {props.setToggle} toggle = {props.toggle}/>;

    case 1:
      return (
        <>
          <Upload 
            setImage = {props.setImage} 
            image = {props.image} 
            setLoading = {props.setLoading}
            loading = {props.loading}
            />
          <ControlledCarousel toggle = {props.toggle}/>  
        </>
      );
    case 2:
      return (
        <>
          <Adj
            image = {props.image} 
            shoulder = {props.shoulder}
            waist = {props.waist}
            hips = {props.hips}
            setLoading = {props.setLoading}
            setShoulder = {props.setShoulder}
            setWaist = {props.setWaist}
            setHips = {props.setHips}
          />
          
        </>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function ScanStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const submitInfo = () => {
    props.setShapeloading(true);
    const data = {
        sheight:props.shoulder, 
        wheight:props.waist, 
        hheight:props.hips,
        gender: props.toggle
    };
    axios.post('http://localhost:9000/paramsAPI', {data});

    async function asyncGet(){
      const res = await (axios.get(`http://localhost:9000/imgAPI`));
      props.setBodyshape(res.data.bodyshape);
      props.setSmeasure (res.data.shoulder);
      props.setWmeasure(res.data.waist);
      props.setHmeasure(res.data.hips);
      props.setswratio(res.data.swratio);
      props.setwhratio(res.data.whratio);
      props.setShapeloading(false);
    }
    asyncGet();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
}

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    props.setBodyshape(-1);
    props.setBodyshape(-1);
    props.setSmeasure(0);
    props.setWmeasure(0);
    props.setHmeasure(0);
    props.setwhratio(0);
    props.setswratio(0);
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div className = {props.bodyshape === -1 ? "stepper" : "nostepper"}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              {props.shapeloading ? null : <Redirect
                bodyshape = {props.bodyshape}
                image = {props.image}
                shapeloading = {props.shapeloading}
                smeasure = {props.smeasure}
                wmeasure = {props.wmeasure}
                hmeasure = {props.hmeasure}
                setShapeloading = {props.setShapeloading}
                swratio = {props.swratio}
                whratio = {props.whratio}
                gender = {props.toggle}
              />}
              </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep, props)}</Typography>
            <div className ={classes.buttons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" 
                  onClick={(activeStep === steps.length - 1 ? submitInfo: handleNext)} 
                  disabled = {activeStep !== 0 && props.image === ''}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
