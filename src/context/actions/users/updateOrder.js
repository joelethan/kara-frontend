import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  UPDATE_ORDER_LOADING,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_ERROR,
} from "../../../constants/actionTypes";

export default ({ data, Id, close }) => (dispatch) => {
  dispatch({
    type: UPDATE_ORDER_LOADING,
  });
  axiosInstance()
    .put("/order/" + Id, data)
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER_SUCCESS,
        payload: res.data,
      });
      close();
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_ORDER_ERROR,
        payload: CONNECTION_ERROR,
      });
    });
};
