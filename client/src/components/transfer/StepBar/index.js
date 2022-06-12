import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const steps = [
  {
    label: 'They paid 2,000 NOK.',
    description: `08 July, 2020 - 3:09 PM(CET)`,
  },
  {
    label: 'RemitFix is processing their payment.',
    description:'08 July, 2020-3:10 PM(CET)',
  },
  {
    label: 'Their transfer is ready for pickup at Premier Bank.',
    description: `08 July, 2020-3:11 PM(CET)`,
  },
  {
    label: 'That is it. You picked up the money.',
    description: `08 July, 2020-4:01 PM(CET)`,
  }
];
const useStyles = makeStyles(() => ({
  root: {
    width: "90%"
  },
  box: {
      backgroundColor: '#5F42F0',
      color:'#FFFFFF',
      width : '100%',
      height : '145px'
  },
  title: {
      color : '#FFFFFF',
      fontSize : '30px',
      fontFamily : 'Robot',
      fontWeight : '700',
      paddingTop : '25px',
      paddingLeft : '25px'
  },
  box1 : {
      backgroundColor: '#FFFFFF',
      width: '100%',
      border : '1px solid',
      color : '#EAEAEA'
  },
  smallTitle : {
      fontSize : '15px',
      paddingTop : '30px',
      paddingLeft : '15px'
  },
  stepIcon: {
    color: "pink"
  }  
}));

export default function StepBar() {

  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}