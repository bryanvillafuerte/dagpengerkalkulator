import React from 'react';
import {
    makeStyles,
    Typography,
    TextField,
    InputAdornment,
    FormControl,
} from '@material-ui/core';

const useStyles = makeStyles({
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
});

export default function InputComp() {
  const classes = useStyles();
  var date = new Date();
  var year1 = date.getFullYear() -1;
  var year2 = date.getFullYear() -2;
  var year3 = date.getFullYear() -3;

  return (
    <>
      <div className={classes.inputSection}>
        <Typography className={classes.inputTitle} variant="body1">
          Årsinntekt fra {year1}
        </Typography>
        <FormControl fullWidth className={classes.inputField}>
          <TextField
            required
            size="small"
            id="input1"
            label="Beløp"
            placeholder="0"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kr</InputAdornment>,
            }}
          />
        </FormControl>
      </div>

      <div className={classes.inputSection}>
        <Typography className={classes.inputTitle} variant="body1">
          Årsinntekt fra {year2}
        </Typography>
        <FormControl fullWidth className={classes.inputField}>
          <TextField
            required
            size="small"
            id="input2"
            label="Beløp"
            placeholder="0"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kr</InputAdornment>,
            }}
          />
        </FormControl>
      </div>

      <div className={classes.inputSection}>
        <Typography className={classes.inputTitle} variant="body1">
          Årsinntekt fra {year3}
        </Typography>
        <FormControl fullWidth className={classes.inputField}>
          <TextField
            required
            size="small"
            id="input3"
            label="Beløp"
            placeholder="0"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kr</InputAdornment>,
            }}
          />
        </FormControl>
      </div>
    </>
  )
}
