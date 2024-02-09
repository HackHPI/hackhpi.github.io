import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { FormControl, FormControlLabel, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import * as React from 'react';

const textfield = {
    minWidth: "100%"
}

// types: 1 = text, 2 = date, 3 = select
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
]

const steps = [
    {
        label: 'Personal Data',
        content: personalData,
    },
    {
        label: 'Create an ad group',
        content: personalData,
    },
    {
        label: 'Create an ad',
        content: personalData,
    },
];

function ContentForm(props) {
    const type = props.type;
    const input = props.input;
    if (type === 1) {
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
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                            <Grid container spacing={3} xs={8}>
                                {step.content.map((item, i) => (
                                    <Grid item xs={6}>
                                        <FormControl style={textfield}>
                                            <FormLabel>{item.formLabel}</FormLabel>
                                            <ContentForm type={item.type} input={item.input} />
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

            <Grid container spacing={10}>
            {/* <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={"h3"}>Personal Data</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>First Name</FormLabel>
                                <TextField type="text" placeholder="First Name" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Last Name</FormLabel>
                                <TextField type="text" placeholder="Last Name" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Date of birth</FormLabel>
                                <TextField type="date" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Gender</FormLabel>
                                <Select value="" displayEmpty>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>male</MenuItem>
                                    <MenuItem value={2}>female</MenuItem>
                                    <MenuItem value={3}>others</MenuItem>
                                    <MenuItem value={4}>prefer not to state</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>E-mail</FormLabel>
                                <TextField type="text" placeholder="example@example.com" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>T-shirt size</FormLabel>
                                <Select value="" displayEmpty>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>XS</MenuItem>
                                    <MenuItem value={2}>S</MenuItem>
                                    <MenuItem value={3}>M</MenuItem>
                                    <MenuItem value={4}>L</MenuItem>
                                    <MenuItem value={5}>XL</MenuItem>
                                    <MenuItem value={6}>XXL</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Diet preferences</FormLabel>
                                <Select value="" displayEmpty>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>omnivore</MenuItem>
                                    <MenuItem value={2}>vegetarian</MenuItem>
                                    <MenuItem value={3}>vegan</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Allergies</FormLabel>
                                <TextField type="text" placeholder="e. g. gluten, ..." />
                            </FormControl>
                            <FormHelperText>Please let us know if you have severe allergies that we must know about.</FormHelperText>
                        </Grid>
                    </Grid>
                </Grid> */}
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={"h3"}>University</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>University/School/Institute</FormLabel>
                                <TextField type="text" placeholder="e. g. University of Potsdam" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Course of study</FormLabel>
                                <TextField type="text" placeholder="e. g. Computer Science" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Intended degree</FormLabel>
                                <Select value="" displayEmpty>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>High School Diploma</MenuItem>
                                    <MenuItem value={2}>Bachelor</MenuItem>
                                    <MenuItem value={3}>Master</MenuItem>
                                    <MenuItem value={3}>PhD</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={"h3"}>Additional</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>How did you hear from us?</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="linkedin" control={<Radio />} label="university/school/institution" />
                                    <FormControlLabel value="linkedin" control={<Radio />} label="LinkedIn" />
                                    <FormControlLabel value="instagram" control={<Radio />} label="Instagram" />
                                    <FormControlLabel value="linkedin" control={<Radio />} label="friends/other students" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Course of study</FormLabel>
                                <TextField type="text" placeholder="e. g. Computer Science" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Intended degree</FormLabel>
                                <Select value="" displayEmpty>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={1}>High School Diploma</MenuItem>
                                    <MenuItem value={2}>Bachelor</MenuItem>
                                    <MenuItem value={3}>Master</MenuItem>
                                    <MenuItem value={3}>PhD</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
export default Registration