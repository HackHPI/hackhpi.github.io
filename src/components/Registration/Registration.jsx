import { Button, Container, Grid, Typography } from "@mui/material";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { FormControl, FormControlLabel, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import * as React from 'react';
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

const textfield = {
    minWidth: "100%"
}

// types: 0 = empty, 1 = text, 2 = date, 3 = select, 4 = radio

const personalData = [
    {
        formLabel: 'First name',
        type: 1,
        input: ['First Name'],
    },
    {
        formLabel: 'Last name',
        type: 1,
        input: ['Last Name'],
    },
    {
        formLabel: 'Date of birth',
        type: 2,
    },
    {
        formLabel: 'Gender',
        type: 3,
        input: ['male', 'female', 'diverse'],
    },
    {
        formLabel: 'E-mail',
        type: 1,
        input: ['abc@xyz.com'],
    },
    {
        formLabel: 'T-shirt size',
        type: 3,
        input: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        formLabel: 'Diet preferences',
        type: 3,
        input: ['omnivore', 'vegetarian', 'vegan'],
    },
    {
        formLabel: 'Allergies',
        type: 1,
        input: ['e. g. gluten, ...'],
        helperText: 'Please let us know if you have severe allergies that we must know about.',
    },
    {
        formLabel: 'University/School/Institute',
        type: 1,
        input: ['e. g. University of Potsdam'],
    },
    {
        formLabel: 'Course of study',
        type: 1,
        input: ['e. g. Computer Science'],
    },
    {
        formLabel: 'Intended degree',
        type: 3,
        input: ['High School Diploma', 'Bachelor', 'Master', 'PhD'],
    },
    {
        formLabel: '',
        type: 0,
    },
]

const motivation = [
    {
        formLabel: 'How did you hear from us?',
        type: 4,
        input: ['university/school/institute', 'friends/other students', 'LinkedIn', 'Instagram'],
    },
    {
        formLabel: '',
        type: 0,
    },
    {
        formLabel: 'Your motivation',
        type: 1,
        input: ['My motivation is ...'],
        helperText: 'Please write a short text (max. 150 words) or 3 key phrases describing your motivation to be part of HackHPI. If you can\'t think of anything, take the following questions as guidance: Can you share a project, creation, or task that holds a special place as one of your favorites? What motivated you to undertake it, and what aspects make you proud of the outcome?',
        rows: 5, // TODO: mehrzeiliges Textfeld
    },
    {
        formLabel: '',
        type: 0,
    },
]
// TODO: maximal capacity for motivation text: 150 words

const skills = [
    {
        formLabel: 'Tech stack',
        type: 1,
        input: ['e. g. Python, ...'],
        helperText: 'Please note programming languages, frameworks, etc. have you worked with.', //etc. auf Englisch? note richtiges Wort?
        rows: 5,
    },
    {
        formLabel: 'Basic steps of your CV',
        type: 1,
        input: ['e. g. working student at HPI'],
        helperText: 'Outline the most important steps of your CV like work experiences and studies.',
        rows: 5, // wie bei Tech stack
    },
    {
        formLabel: 'GitHub account',
        type: 1,
        input: ['e. g. maxm90'],
    },
    {
        formLabel: 'LinkedIn account',
        type: 1,
        input: ['e. g. Max Mustermann'],
    },
]

const teamMembers = [
    {
        formLabel: 'Team member 1',
        type: 1,
        input: ['Name 1'],
    },
    {
        formLabel: 'Team member 2',
        type: 1,
        input: ['Name 2'],
    },
    {
        formLabel: 'Team member 3',
        type: 1,
        input: ['Name 3'],
    },
    {
        formLabel: 'Team member 4',
        type: 1,
        input: ['Name 4'],
    },
    {
        formLabel: 'Team member 5',
        type: 1,
        input: ['Name 5'],
    },
    {
        formLabel: '',
        type: 0,
    },
]

const steps = [
    {
        label: 'Personal data',
        content: personalData,
    },
    {
        label: 'Motivation',
        content: motivation,
    },
    {
        label: 'Skills',
        content: skills,
    },
    {
        label: 'Team members', // max. 5 others
        content: teamMembers,
    },
];

function ContentForm(props) {
    const type = props.type;
    const input = props.input;
    // const rows = props.rows;
    if (type === 0) {
        return null
    } else if (type === 1) {
        return <TextField color="success" type="text" placeholder={input} />
    } else if (type === 2) {
        return <TextField type="date" />
    } else if (type === 3) {
        return <Select value="" displayEmpty>
            <MenuItem value=""><em>None</em></MenuItem>
            {input.map((item, i) => (
                <MenuItem value={i}>{item}</MenuItem>
            ))}
        </Select>
    } else if (type === 4) {
        return <RadioGroup>
            {input.map((item, i) => (
                <FormControlLabel value={i} control={<Radio />} label={item} />
            ))}
        </RadioGroup>
    }
}

function Registration() {
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
        <HackHPIWrapper>
            <Container sx={{ pt: 10, pb: 10 }} maxWidth={"xl"}>
                <Typography variant={"h1"} sx={{ mb: "2rem" }}>Registration</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel
                                optional={
                                    index === 3 ? (
                                        <Typography variant="caption">optional</Typography>
                                    ) : null
                                }
                            >{step.label}</StepLabel>
                            <StepContent>
                                <Grid container spacing={3} xs={8}>
                                    {step.content.map((item, i) => (
                                        <Grid item xs={6}>
                                            <FormControl style={textfield}>
                                                <FormLabel>{item.formLabel}</FormLabel>
                                                <ContentForm type={item.type} input={item.input} rows={item.rows} />
                                                <FormHelperText>{item.helperText}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    ))}
                                    <Grid item xs={2}>
                                        <Button variant="contained" onClick={handleNext}>
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button disabled={index === 0} onClick={handleBack}>
                                            Back
                                        </Button>
                                    </Grid>
                                </Grid>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Container >
        </HackHPIWrapper>
    )
}
export default Registration