import { GET_DATA_KMEAN } from "redux/actions/node_modules/constant/student";
import agent from "redux/actions/node_modules/app/api/agent";

export const getDataKmean = (idSubject) => async (dispatch) => {
  try {
    const data = await agent.Student.listByKmean(idSubject);
    let sum = 0;
    for (let x in data) {
      sum += data[x].data.length;
    }
    for (let x in data) {
      data[x].percent = ((data[x].data.length *100)/ sum).toFixed(2) + "%";
    }
    dispatch({
      type: GET_DATA_KMEAN,
      payload: data,
    });
  } catch (error) {}
};
