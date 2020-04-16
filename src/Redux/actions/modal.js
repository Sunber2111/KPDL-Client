import { OPEN_MODAL, CLOSE_MODAL } from "../constant/modal";

export const openModal = (body) => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: body,
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
    payload: null,
  });
};
