import { OPEN_MODAL, CLOSE_MODAL } from "../constant/modal";

const initialState = {
  body: null,
  open: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL: {
      return {
        ...state,
        open : true,
        body : payload
      }
    }
    case CLOSE_MODAL:{
        return{
            ...state,
            open :false,
            body:null
        }
    }

    default:
      return { ...state };
  }
};
