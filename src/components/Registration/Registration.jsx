import {
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

const textfield = {
    minWidth: "100%"
}

// types: 0 = empty, 1 = text, 2 = date, 3 = select, 4 = radio

const personalData = [
    {
        formLabel: 'First name',
        type: 1,
        input: ['First Name'],
        name: "forename"
    },
    {
        formLabel: 'Last name',
        type: 1,
        input: ['Last Name'],
        name: "surname"
    },
    {
        formLabel: 'Date of birth',
        type: 2,
        name: "age"
    },
    {
        formLabel: 'Gender',
        type: 3,
        input: ['male', 'female', 'diverse'],
        name: "gender"
    },
    {
        formLabel: 'E-mail',
        type: 1,
        input: ['example@example.com'],
        name: "email"
    },
    {
        formLabel: 'T-shirt size',
        type: 3,
        input: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        name: "shirtSize"
    },
    {
        formLabel: 'Diet preferences',
        type: 3,
        input: ['omnivore', 'vegetarian', 'vegan'],
        name: "dietPreference"
    },
    {
        formLabel: 'Allergies',
        type: 1,
        input: ['e. g. gluten, ...'],
        helperText: 'Please let us know if you have severe allergies that we must know about.',
        name: "allergies"
    },
    {
        formLabel: 'University/School/Institute',
        type: 1,
        input: ['e. g. University of Potsdam'],
        name: "university"
    },
    {
        formLabel: 'Course of study',
        type: 1,
        input: ['e. g. Computer Science'],
        name: "fieldOfStudy"
    },
    {
        formLabel: 'Intended degree',
        type: 3,
        input: ['High School Diploma', 'Bachelor', 'Master', 'PhD'],
        name: "intendedDegree"
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
        name: "howDidYouHear"
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
        name: "motivation"
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

    function contentForm(props) {
        const type = props.type;
        const input = props.input;
        const name = props.name
        // const rows = props.rows;
        if (type === 0) {
            return null
        } else if (type === 1) {
            return <TextField
                color="success"
                type="text"
                placeholder={input}
                name={name}
                value={values[name] ?? ""}
                onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
        } else if (type === 2) {
            return <TextField
                type="date"
                name={name}
                value={values[name] ?? ""}
                onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
        } else if (type === 3) {
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
        } else if (type === 4) {
            return <RadioGroup
                value={values[name] ?? ""}
                name={name}
                onChange={(event, value) => handleChange(event.target.name, value)}>
                {input.map((item, i) => (
                    <FormControlLabel value={i} control={<Radio/>} label={item}/>
                ))}
            </RadioGroup>
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
            alert("Could not save Registration. Did you already submit? Please check your spam folder for verification mail")
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
                            >{step.label}</StepLabel>
                            <StepContent>
                                <Grid container spacing={3} xs={8}>
                                    {step.content.map((item, i) => (
                                        <Grid item xs={6}>
                                            <FormControl style={textfield}>
                                                <FormLabel>{item.formLabel}</FormLabel>
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
                                            <LoadingButton variant={"contained"} startIcon={<Send/>} loading={isSending} onClick={submitForm}>
                                                Send
                                            </LoadingButton>
                                            :
                                            <Button variant="contained" onClick={handleNext}>
                                                Continue
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