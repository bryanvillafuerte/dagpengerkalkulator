import React from 'react';
import './App.scss';
import { 
  makeStyles,
  Container,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';
import InputComp from "./components/InputComp";
import navLogo from "./images/nav-logopakke/NAV logo/PNG/Red.png"

const useStyles = makeStyles({
  calculator: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 40,
    background: "gray",
  },

  root: {
    width: "300px",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 40,
    paddingBottom: 40,
  },

  logoContainer: {
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },

  logo: {
    width: "100%",
  },

  title: {
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
    color: "#f2f2f2",
    background: "#19548a",
    borderRadius: 5,
  },

  sectionTitle: {
    paddingBottom: 10,
  },

  inputSection: {
    marginBottom: 10,
  },

  inputTitle: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  inputField: {
    marginBottom: 10,
  },

  inputButton: {
    background: "#19548a",
  }
});

function getInputValue() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;

  var value1 = parseInt(input1)
  var value2 = parseInt(input2)
  var value3 = parseInt(input3)

  var allInput = [value1, value2, value3]

  var totalInput=0;
  for(var i = 0; i < allInput.length; i++){
    totalInput += allInput[i]
  }

  var averageInput = totalInput / allInput.length;

  console.log(averageInput);
}

function App() {
  const classes = useStyles();

  return (
    <Container className="mainContainer">
      <Paper elevation={3} className={classes.calculator}>
        <Paper elevation={3} className={classes.root}>
          <Typography align="center" className={classes.logoContainer}>
            <img className={classes.logo} src={navLogo} alt="NAV Logo" />
          </Typography>

          <Typography className={classes.title} variant="h4" align="center">
            Dagpenger Kalkulator
          </Typography>

          <Typography className={classes.sectionTitle} variant="h6">
            Berign inntekt fra siste 36 måneder
          </Typography>

          <InputComp />

          <Button className={classes.inputButton} variant="contained" color="primary" fullWidth onClick={getInputValue}>Berign</Button>
        </Paper>
      </Paper>
    </Container>
  );
}

export default App;
