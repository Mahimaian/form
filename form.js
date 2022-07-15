
import React, { useState } from "react";
import {Dialog , Button, DialogActions, DialogTitle} from '@mui/material';

export default function Form({ variant, ...props }) {

 const [openDialog, openDialogWindow] = useState(false);

  return (
    <React.Fragment>         
        <Dialog
            open={openDialog}
            // BackdropProps={{classes: {root: classes.backDrop,},}}
            fullWidth={true}
            maxWidth="md"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
            
            {props.heading}
        
      </DialogTitle>
            // fields
            <DialogActions>
          <Button
            color="primary"
            variant="contained" 
          >
            Schedule
          </Button>
          <Button color="inherit" variant="contained"  >
            Cancel
          </Button>
        </DialogActions>
        </Dialog>
        
       

    </React.Fragment>
  );
  }
