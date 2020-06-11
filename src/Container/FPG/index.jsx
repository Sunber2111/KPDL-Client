import React, { useEffect } from "react";
import { Label, Grid, GridRow, GridColumn, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFPG } from "redux/actions/student";
import Subinfo from "component/Subinfo";

const FPG = () => {
  const colors = ["#12c2e9", "#c471ed", "#f64f59"];

  const { fpg } = useSelector((s) => s.student);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFPG());
  }, []);

  const createData = (index) =>
    fpg[index].map((val, i) => (
      <Subinfo context={val} key={i} color={colors[index - 3]} />
    ));

  return (
    <div className="mt-2 ml-3">
      <div>
        <Label basic color="black" className="mb-3 mt-3 mr-3">
          <h3> Phân Tích Dữ Liệu Dựa Trên FP Growth</h3>
        </Label>
        <Button color="google plus">Áp dụng Toàn Bộ</Button>
        <Button.Group className="bg-white ml-3">
          <Button basic color="red">
            Áp dụng Model 1
          </Button>
          <Button basic color="green">
            Áp dụng Model 2
          </Button>
          <Button basic color="blue">
            Áp dụng Model 3
          </Button>
        </Button.Group>
      </div>
      <Grid className="mx-2">
        <GridRow>
          <GridColumn computer={5} mobile={16}>
            {fpg[3] && createData(3)}
          </GridColumn>
          <GridColumn computer={5} mobile={16}>
            {fpg[4] && createData(4)}
          </GridColumn>
          <GridColumn computer={6} mobile={16}>
            {fpg[5] && createData(5)}
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default FPG;
