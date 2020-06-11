import { GET_DATA_KMEAN, GET_DATA_FPG } from "../constant/student";
import agent from "app/api/agent";

export const getDataKmean = (idSubject) => async (dispatch) => {
  try {
    const data = await agent.Student.listByKmean(idSubject);
    let sum = 0;
    for (let x in data) {
      sum += data[x].data.length;
    }
    for (let x in data) {
      data[x].percent = ((data[x].data.length * 100) / sum).toFixed(2) + "%";
    }
    dispatch({
      type: GET_DATA_KMEAN,
      payload: data,
    });
  } catch (error) {}
};

export const getDataFPG = () => async (dispatch) => {
  try {
    const data = await agent.Student.listFPG();
    let fpg = {
      "3": [],
      "4": [],
      "5": [],
    };
    data.forEach((val) => {
      fpg[val.length].push(val)
    });

    dispatch({
      type: GET_DATA_FPG,
      payload: fpg,
    });
  } catch (error) {
    console.log(error);
    
  }
};
