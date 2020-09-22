import {
  GET_SUPPLY_ERROR,
  GET_SUPPLY_LOADING,
  GET_SUPPLY_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default () => (dispatch) => {
  dispatch({ type: GET_SUPPLY_LOADING });
  axiosInstance()
    .get("/supply/all")
    .then((res) => {
      dispatch({ type: GET_SUPPLY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_SUPPLY_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
