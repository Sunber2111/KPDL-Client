import React, { Fragment } from "react";
import bg from "../../../App/images/background.png";
import logo from "../../../App/images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../Component/Navbar";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modal";
import LoginForm from "../../Container/Login/LoginForm";

const useStyles = makeStyles({
  img: {
    width: "65%",
    position: "absolute",
    right: 0,
    padding: 0,
    margin: 0,
  },
  title: {
    color: "#00B156",
    fontSize: "6em",
    fontWeight: "bold",
    top: "25%",
    left: "30px",
    position: "absolute",
  },
  title1: {
    color: "#00B156",
    fontSize: "6em",
    fontWeight: "bold",
    top: "38%",
    left: "30px",
    position: "absolute",
  },
  des: {
    position: "absolute",
    top: "68%",
    width: "280px",
    left: "30px",
    fontSize: "14px",
    color: "gray",
  },
  logo: {
    position: "absolute",
    width: "120px",
    left: "30px",
  },
});

const HomePage = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const login = () => {
    dispath(openModal(<LoginForm />));
  };
  return (
    <Fragment>
      <Navbar />
      <img src={logo} alt="logo" className={classes.logo} />
      <h1 className={classes.title}>KMean</h1>
      <h1 className={classes.title1}>Application</h1>
      <a onClick={() => login()} className="btn-round">
        Login
      </a>
      <p className={classes.des}>
        This Application was a production of Sunber Studio, Design for FREE.
        Login for more functionality{" "}
      </p>
      <img src={bg} alt="background" className={classes.img} />
    </Fragment>
  );
};

export default HomePage;
