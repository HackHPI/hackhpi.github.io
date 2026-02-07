"use client";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useMemo, useState } from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import { LoadingButton } from "@mui/lab";
import { RegistrationRest } from "../../rest/RegistrationRest.js";
import { Mail, Send } from "@mui/icons-material";
import universities from "./universitiesDE.json";
import { GroupManager } from "./GroupManager/GroupManager";
import { INPUT_TYPES } from "./InputTypes.js";

const registrationClosed = false;
const personalData = [
  {
    formLabel: "First name",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["First Name"],
    name: "forename",
    max: 50,
    min: 2,
    required: true,
  },
  {
    formLabel: "Last name",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["Last Name"],
    name: "surname",
    max: 50,
    min: 2,
    required: true,
  },
  {
    formLabel: "Date of birth",
    type: INPUT_TYPES.DATE,
    name: "age",
    required: true,
  },
  {
    formLabel: "Gender",
    type: INPUT_TYPES.SELECT,
    input: ["male", "female", "diverse"],
    name: "gender",
    required: true,
  },
  {
    formLabel: "E-mail",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["example@example.com"],
    name: "email",
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
  },
  {
    formLabel: "T-shirt size",
    type: INPUT_TYPES.SELECT,
    input: ["XS", "S", "M", "L", "XL", "XXL"],
    name: "shirtSize",
    required: true,
  },
  {
    formLabel: "Diet preferences",
    type: INPUT_TYPES.SELECT,
    input: ["omnivore", "vegetarian", "vegan"],
    name: "dietPreference",
    required: true,
  },
  {
    formLabel: "Allergies",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. gluten, ..."],
    helperText:
      "Please let us know if you have severe allergies that we must know about.",
    name: "allergies",
    max: 150,
    required: false,
  },
  {
    formLabel: "University/School/Institute",
    type: INPUT_TYPES.AUTOCOMPLETE,
    input: universities,
    name: "university",
    max: 150,
    min: 2,
    required: true,
  },
  {
    formLabel: "Course of study",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. Computer Science"],
    name: "fieldOfStudy",
    max: 150,
    min: 2,
    required: true,
  },
  {
    formLabel: "Intended degree",
    type: INPUT_TYPES.SELECT,
    input: ["High School Diploma", "Bachelor", "Master", "PhD"],
    name: "intendedDegree",
    required: true,
  },
];

const motivation = [
  {
    formLabel: "How did you hear from us?",
    type: INPUT_TYPES.RADIO,
    input: [
      "university/school/institute",
      "friends/other students",
      "LinkedIn",
      "Instagram",
    ],
    name: "howDidYouHear",
    required: false,
  },
  {
    formLabel: "",
    type: INPUT_TYPES.EMPTY,
  },
  {
    formLabel: "Your motivation",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["My motivation is ..."],
    helperText:
      "Please write a short text (max. 1200 characters) or 3 key phrases describing your motivation to be part of HackHPI. If you can't think of anything, take the following questions as guidance: Can you share a project, creation, or task that holds a special place as one of your favorites? What motivated you to undertake it, and what aspects make you proud of the outcome?",
    rows: 5,
    name: "motivation",
    max: 1200,
    min: 10,
    required: true,
    fullWidth: true,
  },
];
// TODO: maximal capacity for motivation text: 150 words

const skills = [
  {
    formLabel: "Tech stack",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. Python, ..."],
    helperText:
      "Please note programming languages, frameworks, etc. you have already worked with.",
    rows: 3,
    name: "techStack",
    max: 300,
    required: false,
  },
  {
    formLabel: "Previous experiences / studies / projects...",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. working student at HPI, ..."],
    helperText:
      "Outline the most important steps of your CV like work experiences, studies and projects.",
    rows: 3,
    name: "basicOutline",
    max: 500,
    required: false,
  },
  {
    formLabel: "GitHub account",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. maxm90"],
    name: "github",
    max: 50,
    required: false,
  },
  {
    formLabel: "LinkedIn account",
    type: INPUT_TYPES.TEXT_FIELD,
    input: ["e. g. /in/max-mustermann"],
    name: "linkedin",
    max: 50,
    required: false,
  },
];

const travelSponsorship = [
  {
    fullWidth: true,
    input:
      "Our partner, QuantCo, provides travel scholarships for participants from around the globe. Applying is easy — just submit your CV and select the checkbox below.",
    type: INPUT_TYPES.TYPOGRAPHY,
  },
  {
    fullWidth: true,
    input:
      "Please email your CV in PDF format to travel-scholarship@hackhpi.org.",
    type: INPUT_TYPES.TYPOGRAPHY,
  },
  {
    formLabel: "",
    input: [
      "I consent to sharing my contact information and CV with our partner, QuantCo, and authorize them to contact me.",
    ],
    name: "travelStipend",
    type: INPUT_TYPES.CHECKBOX,
    required: false,
    fullWidth: true,
  },
];

const legal = [
  {
    formLabel: "Privacy Policy",
    input: ["I have read and accept the Privacy Policy."],
    name: "privacyPolicy",
    type: INPUT_TYPES.CHECKBOX,
    required: true,
    fullWidth: true,
  },
  {
    formLabel: "Recruiting",
    input: [
      "I agree that my contact and job-related data may be passed on to participating recruiters (sponsors)",
    ],
    name: "recruiters",
    type: INPUT_TYPES.CHECKBOX,
    required: false,
    fullWidth: true,
  },
  {
    input: [
      "Film and sound recordings as well as photos will be made at the event, and you agree to their subsequent use by attending the event.",
    ],
    type: INPUT_TYPES.TYPOGRAPHY,
    name: "photos",
    required: false,
    fullWidth: true,
  },
];

function Registration() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [values, setValues] = useState({});
  const [isSending, setIsSending] = useState(false);
  const registrationRest = useMemo(() => new RegistrationRest(), []);

  const steps = [
    {
      label: "Personal data",
      content: personalData,
    },
    {
      label: "Motivation",
      content: motivation,
    },
    {
      label: "Skills",
      content: skills,
    },
    {
      label: "Team members",
      children: (
        <GroupManager
          eventId={"c11a427e-f679-49b6-8574-b0d3211ad123"}
          onGroupChange={(change) => handleChange("group", change)}
        />
      ),
    },
    {
      label: "Travel Scholarship",
      content: travelSponsorship,
    },
    {
      label: "Confirmation",
      content: legal,
    },
    {
      label: "E-Mail Verification",
      children: (
        <Box
          sx={{
            width: "100%",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3rem",
          }}
        >
          <Stack spacing={3} justifyContent={"center"}>
            <Mail color={"inherit"} sx={{ fontSize: "2rem" }} />
            <Typography>
              To complete the registration, please click on the link in the
              email we sent you!
            </Typography>
          </Stack>
        </Box>
      ),
    },
  ];

  function handleChange(name, inputValue) {
    const newValue = { ...values };
    newValue[name] = inputValue;
    setValues(newValue);
  }

  function enableNext(inputList, name) {
    if (!inputList) {
      console.log("No input list");
      return;
    }
    if (inputList.children) {
      return true;
    }
    const result = inputList.content.reduce((previous, current) => {
      if (
        !current.required &&
        (values[current.name] === undefined || values[current.name] === "")
      ) {
        return previous && true;
      }
      if (
        current.required &&
        ((!values[current.name] && values[current.name] !== 0) ||
          values[current.name] === "")
      ) {
        return previous && false;
      }

      if (current.regex && !values[current.name].match(current.regex)){
        return previous && false;
      }

      const meetsMax = current.max
        ? values[current.name]?.length <= current.max
        : true;
      const meetsMin = current.min
        ? values[current.name]?.length >= current.min
        : true;

      const meetsAll = meetsMax && meetsMin;
      return previous && meetsAll;
    }, true);
    return result;
  }

  function contentForm(props) {
    const type = props.type;
    const input = props.input;
    const name = props.name;
    const rows = props.rows;

    switch (type) {
      case INPUT_TYPES.TEXT_FIELD:
        return (
          <TextField
            type="text"
            placeholder={input[0]}
            multiline
            minRows={rows}
            name={name}
            value={values[name] ?? ""}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
        );
      case INPUT_TYPES.DATE:
        return (
          <TextField
            type="date"
            name={name}
            value={values[name] ?? ""}
            style={{ color: "inherit" }}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
        );
      case INPUT_TYPES.SELECT:
        return (
          <Select
            value={values[name] ?? ""}
            displayEmpty
            name={name}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          >
            <MenuItem value="">
              <em>Please select...</em>
            </MenuItem>
            {input.map((item, i) => (
              <MenuItem value={item} key={i}>
                {item}
              </MenuItem>
            ))}
          </Select>
        );
      case INPUT_TYPES.RADIO:
        return (
          <RadioGroup
            value={values[name] ?? ""}
            name={name}
            onChange={(event, value) => handleChange(event.target.name, value)}
            errorCheck
          >
            {input.map((item, i) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                key={i}
                label={item}
              />
            ))}
          </RadioGroup>
        );
      case INPUT_TYPES.CHECKBOX:
        return (
          <FormControlLabel
            control={
              <Checkbox
                name={name}
                checked={values[name] ?? false}
                onChange={(event, value) => handleChange(name, value)}
              />
            }
            label={input.join("")}
          />
        );
      case INPUT_TYPES.AUTOCOMPLETE:
        return (
          <Autocomplete
            freeSolo
            value={values[name] ?? ""}
            options={input}
            autoSelect
            onChange={(event, value) => handleChange(name, value)}
            renderInput={(params) => (
              <TextField
                {...params}
                name={name}
                onChange={(event) => handleChange(name, event.target.value)}
              />
            )}
          />
        );
      case INPUT_TYPES.TYPOGRAPHY:
        return <Typography fullWidth>{input}</Typography>;

      default:
        return null;
    }
  }

  function gridItemSize(props) {
    if (props.name === "motivation" || props.fullWidth) {
      return 12;
    } else {
      return 6;
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
    registrationRest
      .addRegistration({
        firstName: values.forename,
        lastName: values.surname,
        email: values.email,
        fieldData: JSON.stringify(values),
        signUpForm: {
          id: "e73735ad-c930-44ee-8631-6c5bc3aed029",
          //id: "2f1c60f2-f30b-4432-8129-9131c6e398dd",
        },
        group: values.group ? values.group : undefined,
      })
      .then(() => {
        setIsSending(false);
        handleNext();
      })
      .catch((error) => {
        alert(
          "Could not save Registration. Please try again. If problem persists, please contact support@hackhpi.org. Error: " +
            JSON.stringify(error.data),
        );
        setIsSending(false);
      });
  };

  function renderNextButton(index, step) {
    if (index === steps.length - 1) {
      return;
    }
    if (index === steps.length - 2) {
      return (
        <LoadingButton
          variant={"contained"}
          startIcon={<Send />}
          loading={isSending}
          onClick={submitForm}
          disabled={!enableNext(steps[index], step.label)}
        >
          Send
        </LoadingButton>
      );
    }

    return (
      <Button
        variant="contained"
        onClick={handleNext}
        disabled={!enableNext(steps[index], step.label)}
      >
        Next
      </Button>
    );
  }

  function renderRegistration() {
    if (registrationClosed) {
      return (
        <Box sx={{ paddingTop: 10 }}>
          <Typography variant={"h5"} fontWeight={"bold"} gutterBottom>
            Registration is closed!
          </Typography>
          <Typography
            variant={"h5"}
            fontWeight={"bold"}
            color={"text.disabled"}
          >
            We are currently reviewing all applications and will reach out to
            you soon.
          </Typography>
        </Box>
      );
    }

    return (
      <>
        <Stepper activeStep={activeStep} orientation="vertical" sx={{ mt: 5 }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                optional={
                  index === 3 ? (
                    <Typography variant="caption">optional</Typography>
                  ) : null
                }
              >
                <Box direction="row" spacing={1}>
                  <Typography>{step.label}</Typography>
                </Box>
              </StepLabel>
              <StepContent>
                <Grid container>
                  <Grid item md={8} xs={12}>
                    <Grid container spacing={3}>
                      {step.children
                        ? step.children
                        : step.content.map((item, i) => (
                            <Grid item md={gridItemSize(item)} xs={12} key={i}>
                              <FormControl fullWidth>
                                <FormLabel focused={false}>
                                  {item.formLabel}
                                  {item.required ? "*" : ""}
                                </FormLabel>
                                {contentForm({
                                  type: item.type,
                                  input: item.input,
                                  rows: item.rows,
                                  name: item.name,
                                })}
                                <FormHelperText>
                                  {item.helperText}
                                </FormHelperText>
                              </FormControl>
                            </Grid>
                          ))}
                      <Grid item xs={12}>
                        <Stack direction={"row"} spacing={2}>
                          {renderNextButton(index, step)}
                          {index === steps.length - 1 ? undefined : (
                            <Grid item xs={2}>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                color={"inherit"}
                              >
                                Back
                              </Button>
                            </Grid>
                          )}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Typography color={"text.disabled"} sx={{ marginTop: 3 }}>
          Read our{" "}
          <Link href={"/privacy"} color={"inherit"}>
            privacy policy
          </Link>{" "}
          for information on how we handle your data and what your rights are.
        </Typography>
      </>
    );
  }

  return (
    <HackHPIWrapper>
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }} id={"signupForm"}>
        <Typography variant={"h2"} component={"h1"}>
          Registration
        </Typography>
        {!registrationClosed ? (
          <Typography variant={"subtitle1"} gutterBottom>
            Apply now before February 28th!
          </Typography>
        ) : undefined}
        {renderRegistration()}
      </Container>
    </HackHPIWrapper>
  );
}

export default Registration;

//TODO:
// Ja zur Datenschutzerklärung
// Please check your mailbox to confirm your registration
