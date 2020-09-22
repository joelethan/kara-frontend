import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  ADD_ORDER_LOADING,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
} from "../../../constants/actionTypes";

export default ({ close, history, data, Id }) => (dispatch) => {
  dispatch({
    type: ADD_ORDER_LOADING,
  });
  axiosInstance()
    .post("/order/" + Id, data)
    .then((res) => {
      dispatch({
        type: ADD_ORDER_SUCCESS,
        payload: res.data.order,
      });
      close();
      history.push("/inventory");
    })
    .catch((err) => {
      dispatch({
        type: ADD_ORDER_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
