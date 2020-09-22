import {
  GET_ORDER_ERROR,
  GET_ORDER_LOADING,
  GET_ORDER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default () => (dispatch) => {
  dispatch({ type: GET_ORDER_LOADING });
  axiosInstance()
    .get("/order/all")
    .then((res) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_ORDER_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
