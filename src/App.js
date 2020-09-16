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
import AlertDialog from "./components/DialogComp.js";
import navLogo from "./images/nav-logopakke/NAV logo/PNG/Red.png";
import { getInputValue } from "./scripts/getInputValue";

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
});

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    getInputValue();
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              Berign inntekt fra siste 36 måneder
            </Typography>

            <InputComp />

            <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen} type="submit">
              Beregn
            </Button>
          </Paper>
        </Paper>
      </Container>
      <AlertDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
    </>
  );
}

export default App;
