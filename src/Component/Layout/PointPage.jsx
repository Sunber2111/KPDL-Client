import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  main: {
    background: "#F1F1F1",
    height:"100vh"
  },
});


const PointPage = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.main}>Point Page</div>
    </Fragment>
  );
};

export default PointPage;
