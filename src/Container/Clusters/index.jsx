import React, { Fragment, useEffect } from "react";
import Cluster from "component/Cluster";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BackupIcon from '@material-ui/icons/Backup';
import { getDataKmean } from "redux/actions/student";
import SelectFilter from "container/SelectFilter";

const Clusters = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getDataKmean(1));
  }, []);

  return (
    <Fragment>
      <p className="title-clus-group">Điểm được tập trung vào các cụm</p>
      <Grid >
        <GridRow className="cluster-group ml-2">
          <GridColumn className="g1">
            <Cluster
              data={data[0]}
              className="cluster-1"
              IconStyle={<TrendingUpIcon className="icon-clus" />}
            />
          </GridColumn>
          <GridColumn className="g1">
            <Cluster
              data={data[1]}
              className="cluster-2"
              IconStyle={<ImportExportIcon className="icon-clus" />}
            />
          </GridColumn>
          <GridColumn className="g1">
            <Cluster
              data={data[2]}
              className="cluster-3" 
              IconStyle={<AutorenewIcon className="icon-clus" />}
            />
          </GridColumn>
          <GridColumn className="g1">
            <Cluster
              className="cluster-4"
              data={data[3]}
              IconStyle={<BackupIcon className="icon-clus" />}
            />
          </GridColumn>
          <GridColumn computer={6}>
            <SelectFilter/>
          </GridColumn>
        </GridRow>
      </Grid>
    </Fragment>
  );
};

export default Clusters;
