import { GET_DATA_KMEAN,GET_DATA_FPG } from "../constant/student";

const initialState = {
  data: [],
  fpg: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_KMEAN: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_DATA_FPG: {
      return {
        ...state,
        fpg: payload,
      };
    }
    default:
      return state;
  }
};
