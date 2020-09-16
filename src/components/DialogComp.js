import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle id="dialogTitle"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={refreshPage} color="primary" autoFocus>
            Beregn på nytt
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
