import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { FormControl, FormControlLabel, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import * as React from 'react';

const textfield = {
    minWidth: "100%"
}

// types: 0 = empty, 1 = text, 2 = date, 3 = select, 4 = radio

const personalData = [
    {
        formLabel: 'First Name',
        type: 1,
        input: ['First Name'],
    },
    {
        formLabel: 'Last Name',
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
        input: ['male', 'female', 'others', 'prefer not to state'],
    },
    {
        formLabel: 'E-mail',
        type: 1,
        input: ['example@example.com'],
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
        formLabel: 'Course of Study',
        type: 1,
        input: ['e. g. Computer Science'],    
    },
    {
        formLabel: 'Intended Degree',
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
        input: ['If you can\'t think of anything, take the following questions as guidance: Can you share a project, creation, or task that holds a special place as one of your favorites? What motivated you to undertake it, and what aspects make you proud of the outcome?'],
        helperText: 'Please write a short text (max. 150 words) or 3 key phrases describing your motivation to be part of HackHPI.',
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
        formLabel: 'Tech stack???',
        type: 0,
    },
    {
        formLabel: 'Programming languages',
        type: 1,
        input: ['e. g. Python, ...'],
    },
    {
        formLabel: 'GitHub???',
        type: 0,
    },
    {
        formLabel: '',
        type: 0,
    },
    {
        formLabel: 'Basic Outline???',
        type: 0,
    },
    {
        formLabel: 'CV???',
        type: 0,
    },
    {
        formLabel: 'LinkedIn???',
        type: 0,
    },
    {
        formLabel: '',
        type: 0,
    },
]

const teamMembers = [
    {
        formLabel: 'Team Member 1',
        type: 1,
        input: ['Name 1'],
    },
    {
        formLabel: 'Team Member 2',
        type: 1,
        input: ['Name 2'],
    },
    {
        formLabel: 'Team Member 3',
        type: 1,
        input: ['Name 3'],
    },
    {
        formLabel: 'Team Member 4',
        type: 1,
        input: ['Name 4'],
    },
    {
        formLabel: 'Team Member 5',
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
        label: 'Personal Data',
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
        return <TextField type="text" placeholder={input} />
    } else if (type === 2) {
        return <TextField type="date" />
    } else if (type === 3) {
        return <Select value="" displayEmpty>
            <MenuItem value=""><em>None</em></MenuItem>
            {input.map((item,) => (
                <MenuItem value={item}>{item}</MenuItem>
            ))}
        </Select>
    } else if (type === 4) {
        return <RadioGroup>
            {input.map((item,) => (
                <FormControlLabel value={item} control={<Radio />} label={item} />
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
    )
}
export default Registration