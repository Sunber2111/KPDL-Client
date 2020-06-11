import React, { Fragment } from "react";
import "./style.css";
import Clusters from "container/Clusters";
import Students from "container/Students";
import { Grid } from "@material-ui/core";
import PopChart from "container/PopChart";
import FPG from "container/FPG";

const PointPage = () => {
  return (
    <Fragment>
      <div className="point-page mb-5">
        <Clusters />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className="point-group"
        >
          <Grid item xs={5}>
            <Students />
          </Grid>
          <Grid item xs={7} className="charts-point">
            <PopChart/>
          </Grid>
        </Grid>
        <FPG/>
      </div>
    </Fragment>
  );
};

export default PointPage;
