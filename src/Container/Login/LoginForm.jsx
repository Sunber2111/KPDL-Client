import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import logo from "../../app/images/logo.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  pw: {
    marginTop: "20px",
  },
  logo: {
    width: "180px",
    height:"180px",
    position:"relative",
    left:"32%",
    top:"-60px"
  },
  btnLogin:{
    background: 'linear-gradient(45deg, #43e97b 25%, #38f9d7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width:"100%",
    fontWeight:"bold",
    fontSize:"18px",
    marginTop:"20px !important"
  }
});

const LoginForm = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={logo} className={classes.logo} />
      <form noValidate autoComplete="off" style={{marginTop:"-100px"}}>
        <TextField
          fullWidth={true}
          label="Name Login"
          id="namelogin"
          variant="outlined"
        />
        <TextField
          className={classes.pw}
          fullWidth={true}
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button className={classes.btnLogin}>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
