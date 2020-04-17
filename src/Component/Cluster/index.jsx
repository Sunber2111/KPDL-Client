import React from "react";
import { Segment } from "semantic-ui-react";
import "./style.css";


const Cluster = ({ className, IconStyle, data }) => {


  return (
    <Segment
      className={className ? `cluster ${className}` : "cluster"}
      loading={data !== undefined ? false : true}
    >
      {IconStyle}
      <p className="cluster-point">{data&&data.cluster}</p>
  <p className="clus-des">{data&&data.data.length} người đạt số điểm trong khoảng này chiếm {data&&data.percent} </p>
    </Segment>
  );
};

export default Cluster;
