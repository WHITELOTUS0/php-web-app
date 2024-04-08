import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const steps = [
    "Personal Info",
    "Education Background",
    "UCE Results",
    "Parents/Guardian Info",
    "Finish",
];

const subjects = [
    "English",
    "Math",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
];

export default function Index() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    // State for step 1 inputs
    const [studentName, setStudentName] = React.useState("");
    const [indexNumber, setIndexNumber] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [firstChoice, setFirstChoice] = React.useState("");
    const [totalAggregate, setTotalAggregate] = React.useState(0);
    const [subjectScores, setSubjectScores] = React.useState({
        English: "",
        Math: "",
        Biology: "",
        Chemistry: "",
        Physics: "",
        Geography: "",
        History: "",
    });
    const [bestDoneOptionalSubjectScore, setBestDoneOptionalSubjectScore] =
        React.useState("");
    const [
        secondBestDoneOptionalSubjectScore,
        setSecondBestDoneOptionalSubjectScore,
    ] = React.useState("");
    const [
        thirdBestDoneOptionalSubjectScore,
        setThirdBestDoneOptionalSubjectScore,
    ] = React.useState("");
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [parentName, setParentName] = React.useState("");
    const [parentEmail, setParentEmail] = React.useState("");
    const [parentTelNo, setParentTelNo] = React.useState("");
    const [parentNationality, setParentNationality] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [parentNationalNo, setParentNationalNo] = React.useState("");

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
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "10px 0",
            }}
        >
            <Box sx={{ width: "80%", maxWidth: 600 }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">
                                    Optional
                                </Typography>
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
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        {activeStep === 0 && (
                            <React.Fragment>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Student's Name"
                                    variant="outlined"
                                    value={studentName}
                                    onChange={(e) =>
                                        setStudentName(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Index Number"
                                    variant="outlined"
                                    value={indexNumber}
                                    onChange={(e) =>
                                        setIndexNumber(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setDateOfBirth(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email Address"
                                    variant="outlined"
                                    value={emailAddress}
                                    onChange={(e) =>
                                        setEmailAddress(e.target.value)
                                    }
                                />
                            </React.Fragment>
                        )}
                        {activeStep === 1 && (
                            <React.Fragment>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Former School"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <Typography variant="body1">
                                    Was Crested secondary school your first
                                    choice?
                                </Typography>
                                <RadioGroup
                                    row
                                    aria-label="firstChoice"
                                    name="row-radio-buttons-group"
                                    value={firstChoice}
                                    onChange={(e) =>
                                        setFirstChoice(e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Year in Which UCE was sat"
                                    variant="outlined"
                                    type="number"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                            </React.Fragment>
                        )}
                        {activeStep === 2 && (
                            <React.Fragment>
                                <Typography variant="body1">
                                    Total Aggregate Scored in 8
                                </Typography>
                                <RadioGroup
                                    row
                                    aria-label="totalAggregate"
                                    name="totalAggregate"
                                    value={totalAggregate}
                                    onChange={(e) =>
                                        setTotalAggregate(e.target.value)
                                    }
                                >
                                    {[...Array(9)].map((_, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index + 1}
                                            control={<Radio />}
                                            label={index + 1}
                                        />
                                    ))}
                                </RadioGroup>
                                <Typography variant="body1">
                                    English, Math, Biology, Chemistry, Physics,
                                    Geography, History
                                </Typography>
                                {subjects.map((subject, index) => (
                                    <React.Fragment key={index}>
                                        <FormLabel>{subject}</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-label={`${subject}Score`}
                                            name={`${subject}Score`}
                                            value={subjectScores[subject]}
                                            onChange={(e) =>
                                                setSubjectScores({
                                                    ...subjectScores,
                                                    [subject]: e.target.value,
                                                })
                                            }
                                        >
                                            {[...Array(9)].map(
                                                (_, scoreIndex) => (
                                                    <FormControlLabel
                                                        key={scoreIndex}
                                                        value={scoreIndex + 1}
                                                        control={<Radio />}
                                                        label={scoreIndex + 1}
                                                    />
                                                )
                                            )}
                                        </RadioGroup>
                                    </React.Fragment>
                                ))}
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Best done Optional Subject"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <RadioGroup
                                    row
                                    aria-label="bestDoneOptionalSubjectScore"
                                    name="row-radio-buttons-group"
                                    value={bestDoneOptionalSubjectScore}
                                    onChange={(e) =>
                                        setBestDoneOptionalSubjectScore(
                                            e.target.value
                                        )
                                    }
                                >
                                    {[...Array(9)].map((_, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index + 1}
                                            control={<Radio />}
                                            label={index + 1}
                                        />
                                    ))}
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Second Best done Optional Subject"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <RadioGroup
                                    row
                                    aria-label="secondBestDoneOptionalSubjectScore"
                                    name="row-radio-buttons-group"
                                    value={secondBestDoneOptionalSubjectScore}
                                    onChange={(e) =>
                                        setSecondBestDoneOptionalSubjectScore(
                                            e.target.value
                                        )
                                    }
                                >
                                    {[...Array(9)].map((_, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index + 1}
                                            control={<Radio />}
                                            label={index + 1}
                                        />
                                    ))}
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Third Best done Optional Subject"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <RadioGroup
                                    row
                                    aria-label="thirdBestDoneOptionalSubjectScore"
                                    name="row-radio-buttons-group"
                                    value={thirdBestDoneOptionalSubjectScore}
                                    onChange={(e) =>
                                        setThirdBestDoneOptionalSubjectScore(
                                            e.target.value
                                        )
                                    }
                                >
                                    {[...Array(9)].map((_, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index + 1}
                                            control={<Radio />}
                                            label={index + 1}
                                        />
                                    ))}
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="First Choice Combination"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Second Choice Combination"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Third Choice Combination"
                                    variant="outlined"
                                    // Add any other props you need, like onChange to handle input changes
                                />
                                <Typography variant="body1">
                                    Upload UCE Results
                                </Typography>
                                <input
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={(event) => {
                                        // Update the state with the selected file
                                        setSelectedFile(event.target.files[0]);
                                    }}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        component="span"
                                    >
                                        Choose File
                                    </Button>
                                </label>
                            </React.Fragment>
                        )}
                        {activeStep === 3 && (
                            <React.Fragment>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Parent's Name"
                                    variant="outlined"
                                    value={parentName}
                                    onChange={(e) =>
                                        setParentName(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Parent's Email Address"
                                    variant="outlined"
                                    type="email"
                                    value={parentEmail}
                                    onChange={(e) =>
                                        setParentEmail(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Parent's Tel No"
                                    variant="outlined"
                                    type="tel"
                                    value={parentTelNo}
                                    onChange={(e) =>
                                        setParentTelNo(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Parent's Nationality"
                                    variant="outlined"
                                    value={parentNationality}
                                    onChange={(e) =>
                                        setParentNationality(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Country"
                                    variant="outlined"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Parent's National No"
                                    variant="outlined"
                                    value={parentNationalNo}
                                    onChange={(e) =>
                                        setParentNationalNo(e.target.value)
                                    }
                                />
                                {/* Navigation buttons */}
                            </React.Fragment>
                        )}

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="error"
                                variant="contained"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {isStepOptional(activeStep) && (
                                <Button
                                    color="inherit"
                                    onClick={handleSkip}
                                    sx={{ mr: 1 }}
                                >
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext} variant="contained">
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Box>
    );
}
