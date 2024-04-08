import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = [
 'Personal Info',
 'Education Background',
 'UCE Results',
 'Parents/Guardian Info',
 'Finish',
];

export default function Index() {
 const [activeStep, setActiveStep] = React.useState(0);
 const [skipped, setSkipped] = React.useState(new Set());

 // State for step 1 inputs
 const [studentName, setStudentName] = React.useState('');
 const [indexNumber, setIndexNumber] = React.useState('');
 const [dateOfBirth, setDateOfBirth] = React.useState('');
 const [emailAddress, setEmailAddress] = React.useState('');

 const isStepOptional = (step) => {
    return step === 1; // Assuming Education Background is optional
 };

 const isStepSkipped = (step) => {
    return skipped.has(step);
 };

 const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
 };

 const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
 };

 const handleReset = () => {
    setActiveStep(0);
 };

 return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '10px 0' }}>
      <Box sx={{ width: '80%', maxWidth: 600 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {activeStep === 0 && (
              <React.Fragment>
                <TextField
                 fullWidth
                 margin="normal"
                 label="Student's Name"
                 variant="outlined"
                 value={studentName}
                 onChange={(e) => setStudentName(e.target.value)}
                />
                <TextField
                 fullWidth
                 margin="normal"
                 label="Index Number"
                 variant="outlined"
                 value={indexNumber}
                 onChange={(e) => setIndexNumber(e.target.value)}
                />
                <TextField
                 fullWidth
                 margin="normal"
                 label="Date of Birth"
                 type="date"
                 InputLabelProps={{
                    shrink: true,
                 }}
                 variant="outlined"
                 value={dateOfBirth}
                 onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <TextField
                 fullWidth
                 margin="normal"
                 label="Email Address"
                 variant="outlined"
                 value={emailAddress}
                 onChange={(e) => setEmailAddress(e.target.value)}
                />
              </React.Fragment>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="error"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                 Skip
                </Button>
              )}
              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
 );
}
