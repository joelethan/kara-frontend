import axiosInstance from "../../../helpers/axiosInstance";
import {
  ADD_MEASUREMENTS_ERROR,
  ADD_MEASUREMENTS_SUCCESS,
  ADD_MEASUREMENTS_LOADING,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";

export default (history) => (dispatch) => {
  dispatch({ type: ADD_MEASUREMENTS_LOADING });
  axiosInstance(history)
    .get("/measurement/all")
    .then((res) => {
      dispatch({ type: ADD_MEASUREMENTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: ADD_MEASUREMENTS_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
