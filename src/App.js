import React from 'react';
import './App.scss';
import { 
  makeStyles,
  Container,
  Typography,
  Paper,
  Button
} from '@material-ui/core';
import InputComp from "./components/InputComp";
import { getInputValue } from "./scripts/getInputValue";
import navLogo from "./images/nav-logopakke/NAV logo/PNG/Red.png";

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
    background: "#3f51b5",
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

  rightResult: {
    marginTop: 40,
    marginBottom: 40,
    padding: 20,
  },

  resultContent: {
    paddingTop: 5,
    paddingBottom: 5,
  },

  resetButton: {
    marginTop: 20,
    color: "#C30000",
  }
});

function App() {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
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
              Beregn din inntekt fra siste 3 kalenderårene.
            </Typography>

            <InputComp />

            <Button variant="contained" onClick={getInputValue} color="primary" fullWidth type="submit">
              Beregn
            </Button>

            <Paper id="resultContainer" elevation={3} className={classes.rightResult}>
              <Typography className={classes.resultContent} variant="h5" align="center" id="rightResult"></Typography>
              <Typography className={classes.resultContent} variant="body1" align="center" id="dailyResult"></Typography>
              <Typography className={classes.resultContent} variant="body1" align="center" id="maxGtext"></Typography>
              <Button variant="contained" className={classes.resetButton} onClick={refreshPage} fullWidth>
                Nullstill
              </Button>
            </Paper>
          </Paper>
        </Paper>
      </Container>
    </>
  );
}

export default App;