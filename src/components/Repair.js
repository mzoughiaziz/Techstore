import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

    return (
      <div>
            
            <div className={classes.paper}>

      <Container component="main" maxWidth="xs">
      <CssBaseline />
<form>
      <h4 class="card-title text-center">Description</h4>
<p></p>
      
      <div className="form-row">
      <div className="form-group col-md-6">
            <label>First Name*</label>
            <input type="text" className="form-control" id="inputFirst" />
          </div>
          <div className="form-group col-md-6">
            <label>Name*</label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          </div>
        
        <div className="form-group">
          <label>Device*</label>
          <input type="text" className="form-control" id="inputName" placeholder="ASUS i7 8éme gén" />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input type="email" className="form-control" id="inputAddress2" placeholder="example@mail.com" />
        </div>
        <div className="form-group">
          <label>Phone Number*</label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="form-group">
          <label>City*</label>
          <input type="text" className="form-control" id="inputCity" placeholder="Sousse" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      
      </Container>
    </div>
    
    </div>
    );
  }