import React, { useEffect, useState } from "react";
import {
  TextField,
  Container,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "../../axios";
import "./_.scss";

const useStyles = makeStyles({
  login: {
    backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    background: "white",
    width: "600px",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "50px",
    paddingTop: "25px",
  },
  input: {
    width: "400px",
    height: "45px",
    marginTop: "40px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
    "& .Mui-focused": {
      color: "grey",
    },
  },
  heading: {
    fontSize: "20px",
    fontWeight: 500,
    textAlign: "center",
  },
  button: {
    marginTop: "40px",
    width: "400px",
    color: "white",
    background: "#6095D8",
    height: "45px",
    borderRadius: "15px",
    "&:hover": {
      background: "#6095D8",
    },
  },
  register: {
    fontSize: "16px",
    paddingTop: "16px",
    "& span": {
      color: "#6095D8",
      transition: "all .2s ease-in",
      "&:hover": {
        color: "blue",
        cursor: "pointer",
      },
    },
  },
  thirdPartyText: {
    fontSize: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  thirdParty: {
    margin: "0 auto",
    "& img": {
      marginRight: "25px",
      marginTop: "10px",
      "&:hover": {
        cursor: "pointer",
      },
      "&:last-child": {
        marginRight: "0",
      },
    },
  },
});

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const {
    user,
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companySize: 0,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [ready, setReady] = useState(false);
  const handleNext = async () => {
    try {
      var accessToken = await getAccessTokenSilently({
        audience: `https://jobflex.us.auth0.com/api/v2/`,
        scope: "read:current_user update:current_user_metadata",
      });
      await axios.register(registerData, accessToken);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function checkRegistration() {
      var { data } = await axios.checkRegistration(
        await getAccessTokenSilently({
          audience: `https://jobflex.us.auth0.com/api/v2/`,
          scope: "read:current_user",
        }),
        user?.sub
      );
      if (data["error"]) {
        setActiveStep(!data["error"]["registered"] ? 0 : 1);
        return;
      }
      history.push("/dashboard");
    }

    if (!isLoading) {
      if (isAuthenticated) {
        checkRegistration();
        setTimeout(() => {
          setReady(true);
        }, 1000);
      } else {
        history.push("/login");
      }
    }
  }, [isLoading]);

  function register() {
    return (
      <>
        <TextField
          className={classes.input}
          placeholder="Enter your first name"
          label="First Name"
          variant="outlined"
          id="firstName"
          value={registerData.firstName}
          onChange={setRegisterState}
        />
        <TextField
          className={classes.input}
          placeholder="Enter your last name"
          label="Last Name"
          variant="outlined"
          value={registerData.lastName}
          id="lastName"
          onChange={setRegisterState}
        />
        <TextField
          className={classes.input}
          placeholder="Enter your company name"
          label="Company Name"
          variant="outlined"
          id="companyName"
          value={registerData.companyName}
          onChange={setRegisterState}
        />
        <TextField
          className={classes.input}
          placeholder="Enter your company size"
          label="Company Size"
          variant="outlined"
          id="companySize"
          type="number"
          value={registerData.companySize}
          onChange={setRegisterState}
        />
        <Button
          onClick={handleNext}
          variant="contained"
          className={classes.button}
        >
          Next
        </Button>
      </>
    );
  }

  const [value, setValue] = useState("free");
  function changeRadio(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  async function handleFinish() {
    const { data } = await axios.registerPlan(
      value,
      await getAccessTokenSilently({
        audience: `https://jobflex.us.auth0.com/api/v2/`,
        scope: "read:current_user update:current_user_metadata",
      })
    );
    console.log(data);
    if (data["error"]) {
      console.log(data["error"]);
      return;
    }

    history.push("/dashboard");
  }
  function payment() {
    return (
      <div>
        <FormControl>
          <FormLabel>Plans</FormLabel>
          <RadioGroup value={value} onChange={changeRadio}>
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel value="basic" control={<Radio />} label="Basic" />
            <FormControlLabel
              value="premium"
              control={<Radio />}
              label="Premium"
            />
          </RadioGroup>
        </FormControl>
        <div>
          <Button onClick={handleFinish}>Finish</Button>
        </div>
      </div>
    );
  }

  function setRegisterState(e: React.ChangeEvent<HTMLInputElement>) {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function getCurrentStep() {
    switch (activeStep) {
      case 0:
        return register();
      case 1:
        return payment();
      default:
        break;
    }
  }

  const steps = ["Register Profile", "Subscribe to plan"];

  if (!isLoading && ready) {
    return (
      <div className={classes.login}>
        <Container disableGutters={true} className={classes.root}>
          <h1 className={classes.heading}>JobFlex</h1>
          <h3 className={classes.heading}>Registration</h3>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getCurrentStep()}
        </Container>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <CircularProgress className="spinner" color="secondary" />
      </div>
    );
  }
}

export default Register;
