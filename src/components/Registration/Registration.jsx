'use client'
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from "@mui/material";
import * as React from 'react';
import {useMemo, useState} from 'react';
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import {LoadingButton} from "@mui/lab";
import {RegistrationRest} from "../../rest/RegistrationRest.js";
import {Send} from "@mui/icons-material";
import Help from '@mui/icons-material/Help';

// types: 0 = empty, 1 = textfield, 2 = date, 3 = select, 4 = radio

const personalData = [
    {
        formLabel: 'First name',
        type: 1,
        input: ['First Name'],
        name: "forename",
        max: 50,
        min: 2,
        required: true,
    },
    {
        formLabel: 'Last name',
        type: 1,
        input: ['Last Name'],
        name: "surname",
        max: 50,
        min: 2,
        required: true,
    },
    {
        formLabel: 'Date of birth',
        type: 2,
        name: "age",
        required: true,
    },
    {
        formLabel: 'Gender',
        type: 3,
        input: ['male', 'female', 'diverse'],
        name: "gender",
        required: true,
    },
    {
        formLabel: 'E-mail',
        type: 1,
        input: ['example@example.com'],
        name: "email",
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        required: true,
    },
    {
        formLabel: 'T-shirt size',
        type: 3,
        input: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        name: "shirtSize",
        required: true,
    },
    {
        formLabel: 'Diet preferences',
        type: 3,
        input: ['omnivore', 'vegetarian', 'vegan'],
        name: "dietPreference",
        required: true,
    },
    {
        formLabel: 'Allergies',
        type: 1,
        input: ['e. g. gluten, ...'],
        helperText: 'Please let us know if you have severe allergies that we must know about.',
        name: "allergies",
        max: 150,
        required: false,
    },
    {
        formLabel: 'University/School/Institute',
        type: 1,
        input: ['e. g. University of Potsdam'],
        name: "university",
        max: 150,
        min: 2,
        required: true,
    },
    {
        formLabel: 'Course of study',
        type: 1,
        input: ['e. g. Computer Science'],
        name: "fieldOfStudy",
        max: 150,
        min: 2,
        required: true,
    },
    {
        formLabel: 'Intended degree',
        type: 3,
        input: ['High School Diploma', 'Bachelor', 'Master', 'PhD'],
        name: "intendedDegree",
        required: true,
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
        name: "howDidYouHear",
        required: false,
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
        rows: 5,
        name: "motivation",
        max: 1200,
        min: 10,
        required: true,
    },
]
// TODO: maximal capacity for motivation text: 150 words

const skills = [
    {
        formLabel: 'Tech stack',
        type: 1,
        input: ['e. g. Python, ...'],
        helperText: 'Please note programming languages, frameworks, etc. you have already worked with.',
        rows: 3,
        name: "techStack",
        max: 300,
        required: false,
    },
    {
        formLabel: 'Basic steps of work experiences/studies/projects/...',
        type: 1,
        input: ['e. g. working student at HPI, ...'],
        helperText: 'Outline the most important steps of your CV like work experiences, studies and projects.',
        rows: 3,
        name: "basicOutline",
        max: 500,
        required: false,
    },
    {
        formLabel: 'GitHub account',
        type: 1,
        input: ['e. g. maxm90'],
        name: "github",
        max: 50,
        required: false,
    },
    {
        formLabel: 'LinkedIn account',
        type: 1,
        input: ['e. g. Max Mustermann'],
        name: "linkedin",
        max: 50,
        required: false,
    },
]

const teamMembers = [
    {
        formLabel: 'Team member 1',
        type: 1,
        input: ['Name 1'],
        max: 100,
        required: false,
    },
    {
        formLabel: 'Team member 2',
        type: 1,
        input: ['Name 2'],
        max: 100,
        required: false,
    },
    {
        formLabel: 'Team member 3',
        type: 1,
        input: ['Name 3'],
        max: 100,
        required: false,
    },
    {
        formLabel: 'Team member 4',
        type: 1,
        input: ['Name 4'],
        max: 100,
        required: false,
    },
    {
        formLabel: 'Team member 5',
        type: 1,
        input: ['Name 5'],
        max: 100,
        required: false,
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
        label: 'Team members',
        content: teamMembers,
    },
];


function Registration() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [values, setValues] = useState({});
    const [isSending, setIsSending] = useState(false);
    const registrationRest = useMemo(() => new RegistrationRest(), [])

    function handleChange(name, inputValue) {
        console.log("incoming", name, values)
        const newValue = {...values}
        newValue[name] = inputValue;
        console.log(newValue)
        setValues(newValue);
    }

    function enableNext(inputList, name) {
        console.log("NEXT", name)
        if (!inputList) {
            return;
        }
        return !inputList.content.reduce((previous, current) => {
            console.log(current)
            const meetsMax = current.max ? values[current.name]?.length <= current.max : true;
            const meetsMin = current.min ? values[current.name]?.length >= current.min : true;
            console.log(previous, meetsMax, meetsMin)
            return previous && meetsMax && meetsMin

        }, true)
    }

    function errorCheck(props) {
        const values = props.values;

    }

    function contentForm(props) {
        const type = props.type;
        const input = props.input;
        const name = props.name;
        const rows = props.rows;

        switch (type) {
            case 1:
                return <TextField
                    type="text"
                    placeholder={input}
                    multiline
                    minRows={rows}
                    name={name}
                    value={values[name] ?? ""}
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
                />
            case 2:
                return <TextField
                    type="date"
                    name={name}
                    value={values[name] ?? ""}
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
                />
            case 3:
                return <Select
                    value={values[name] ?? ""}
                    displayEmpty
                    name={name}
                    onChange={(event) => handleChange(event.target.name, event.target.value)}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    {input.map((item, i) => (
                        <MenuItem value={i}>{item}</MenuItem>
                    ))}
                </Select>
            case 4:
                return <RadioGroup
                    value={values[name] ?? ""}
                    name={name}
                    onChange={(event, value) => handleChange(event.target.name, value)}
                    errorCheck
                >
                    {errorCheck({
                        values: values[name],

                    })}
                    {input.map((item, i) => (
                        <FormControlLabel value={i} control={<Radio/>} label={item}/>
                    ))}
                </RadioGroup>
            default:
                return null
        }
    }

    function gridItemSize(props) {
        if (props.name === "motivation") {
            return 12
        } else {
            return 6
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const submitForm = () => {
        setIsSending(true);
        registrationRest.addRegistration(values).then(() => {
            setIsSending(false);
            handleNext()
        }).catch(() => {
            alert("Could not save Registration. Did you already submit? Please check your spam folder for verification mail.")
            setIsSending(false)
        })

    }

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <HackHPIWrapper>
            <Container sx={{pt: 10, pb: 10}} maxWidth={"xl"}>
                <Typography variant={"h1"} sx={{mb: "2rem"}}>Registration</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel
                                optional={
                                    index === 3 ? (
                                        <Typography variant="caption">optional</Typography>
                                    ) : null
                                }
                            >
                                <Box direction="row" spacing={1}
                                     sx={{display: "flex", justifyContent: "space-between"}}>
                                    <Typography>
                                        {step.label}
                                    </Typography>
                                    <Help/>
                                </Box>

                            </StepLabel>
                            <StepContent>
                                <Grid container spacing={3} xs={8}>
                                    {step.content.map((item, i) => (
                                        <Grid item xs={gridItemSize({name: item.name})}>
                                            <FormControl fullWidth>
                                                <FormLabel>
                                                    {item.formLabel}{item.required ? "*" : ""}
                                                </FormLabel>
                                                {contentForm({
                                                    type: item.type,
                                                    input: item.input,
                                                    rows: item.rows,
                                                    name: item.name
                                                })}
                                                <FormHelperText>{item.helperText}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    ))}
                                    <Grid item xs={2}>
                                        {index === steps.length - 1 ?
                                            <LoadingButton variant={"contained"} startIcon={<Send/>} loading={isSending}
                                                           onClick={submitForm}>
                                                Send
                                            </LoadingButton>
                                            :
                                            <Button variant="contained" onClick={handleNext}
                                                    disabled={enableNext(steps[index], step.label)}>
                                                Next
                                            </Button>
                                        }

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
            </Container>
        </HackHPIWrapper>
    )
}

export default Registration

//TODO:
// Ja zur Datenschutzerklärung
// Please check your mailbox to confirm your registration