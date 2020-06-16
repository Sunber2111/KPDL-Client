import React, { useEffect, useState } from "react";
import {
  Label,
  Grid,
  GridRow,
  GridColumn,
  Button,
  Form,
  Checkbox,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFPG } from "redux/actions/student";
import Subinfo from "component/Subinfo";

const FPG = () => {
  const [state, setState] = useState({ value: 1 });

  const handleChange = (e, { value }) => setState({ value });

  const colors = ["#12c2e9", "#c471ed", "#f64f59"];

  const { fpg } = useSelector((s) => s.student);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFPG());
  }, []);

  const createData = (index) => {
    if (state.value === 1) {
      return fpg[index].map((val, i) => (
        <Subinfo context={val} key={i} color={colors[index - 3]} />
      ));
    } else {
      if (index !== 5) {
        const newIndex = Math.floor(fpg[state.value].length / 3);

        return fpg[state.value]
          .slice(newIndex * (index - 3), newIndex + newIndex * (index - 3))
          .map((val, i) => (
            <Subinfo context={val} key={i} color={colors[state.value - 3]} />
          ));
      } else {
        const newIndex = Math.floor(fpg[state.value].length / 3);
        const final = newIndex * 2 ;

        return fpg[state.value]
          .slice(final)
          .map((val, i) => (
            <Subinfo context={val} key={i} color={colors[state.value - 3]} />
          ));
      }
    }
  };

  return (
    <div className="mt-2 ml-3">
      <div>
        <Label basic color="black" className="mb-3 mt-3 mr-3">
          <h3> Phân Tích Dữ Liệu Dựa Trên FP Growth</h3>
        </Label>
        <Button color="google plus">Áp dụng Toàn Bộ</Button>
        <Button.Group className="bg-white ml-lg-3 mt-xs-2">
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
        <Form className="d-flex flex-row">
          <Form.Field className="mr-5">Chọn Chế Độ:</Form.Field>
          <Form.Field className="mr-5">
            <Checkbox
              radio
              label="Tất Cả"
              name="checkboxRadioGroup"
              value={1}
              checked={state.value === 1}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field className="mr-5">
            <Checkbox
              radio
              label="Luật khai phá 2 sản phẩm"
              value={3}
              checked={state.value === 3}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field className="mr-5">
            <Checkbox
              radio
              label="Luật khai phá 3 sản phẩm"
              value={4}
              checked={state.value === 4}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field className="mr-5">
            <Checkbox
              radio
              label="Luật khai phá 4 sản phẩm"
              value={5}
              checked={state.value === 5}
              onChange={handleChange}
            />
          </Form.Field>
        </Form>
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
