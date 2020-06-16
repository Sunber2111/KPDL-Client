import React, { Fragment } from "react";
import "./style.css";
import Clusters from "container/Clusters";
import Students from "container/Students";
import PopChart from "container/PopChart";
import FPG from "container/FPG";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";
import StackChart from "container/StackChart";
import PieChart from "container/PieChart";

const PointPage = () => {
  return (
    <Fragment>
      <div className="point-page mb-5">
        <Clusters />
        <Grid className="mt-0">
          <GridRow>
            <GridColumn computer={6} mobile={16}>
              <Students />
            </GridColumn>
            <GridColumn computer={5} mobile={16} className="charts-point">
              <Grid>
                <GridRow className="m-0">
                  <PopChart />
                </GridRow>
                <GridRow>
                  <PieChart/>
                </GridRow>
              </Grid>
            </GridColumn>
            <GridColumn computer={5} mobile={16}>
              <StackChart />
            </GridColumn>
          </GridRow>
        </Grid>
        <FPG />
      </div>
    </Fragment>
  );
};

export default PointPage;
