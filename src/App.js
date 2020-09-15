import React from 'react';
import './App.scss';
import { Container,
  Typography,
  Paper, 
  TextField,
  InputAdornment,
  FormControl
} from '@material-ui/core';


function App() {
  return (
    <Container className="mainContainer">
      <Paper elevation={3} className="calculatorContainer">
        <Typography variant="h3" align="center" color="Primary">
          Dagpenger Kalkulator
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Beløp"
            defaultValue="Hello World"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kr</InputAdornment>,
            }}
          />
        </FormControl>
      </Paper>
    </Container>
  );
}

export default App;
