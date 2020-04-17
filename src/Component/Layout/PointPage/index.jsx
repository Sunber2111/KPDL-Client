import React, { Fragment } from "react";
import "./style.css";
import Clusters from "../../../Container/Clusters";
import Students from "../../../Container/Students";
import { Grid } from "@material-ui/core";
import PopChart from "../../../Container/PopChart";

const PointPage = () => {
  return (
    <Fragment>
      <div className="point-page">
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
      </div>
    </Fragment>
  );
};

export default PointPage;
