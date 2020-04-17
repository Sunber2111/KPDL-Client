import React, { Fragment, useEffect } from "react";
import Cluster from "../../Component/Cluster";
import { List } from "semantic-ui-react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { getDataKmean } from "../../Redux/actions/student";

const Clusters = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getDataKmean("8D2A4BDC-6B58-4EE9-97F1-39A39DF5BC17"));
  }, []);

  return (
    <Fragment>
      <p className="title-clus-group">
        Điểm được tập trung vào các cụm 
      </p>
      <List horizontal className="cluster-group">
        <List.Item className="g1">
          <Cluster
            data={data[0]}
            className="cluster-1"
            IconStyle={<TrendingUpIcon className="icon-clus" />}
          />
        </List.Item>
        <List.Item className="g1">
          <Cluster
            data={data[1]}
            className="cluster-2"
            IconStyle={<ImportExportIcon className="icon-clus" />}
          />
        </List.Item>
        <List.Item className="g1">
          <Cluster
            data={data[2]}
            className="cluster-3"
            IconStyle={<AutorenewIcon className="icon-clus" />}
          />
        </List.Item>
        <List.Item className="final-cluster">
          <Cluster
            className="cluster-4"
            IconStyle={<AutorenewIcon className="icon-clus" />}
          />
        </List.Item>
      </List>
    </Fragment>
  );
};

export default Clusters;
