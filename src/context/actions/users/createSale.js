import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  ADD_ORDER_LOADING,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
} from "../../../constants/actionTypes";

export default ({ data, close }) => (dispatch) => {
  dispatch({
    type: ADD_ORDER_LOADING,
  });

  axiosInstance()
    .put("/order/express", data)
    .then((res) => {
      dispatch({
        type: ADD_ORDER_SUCCESS,
        payload: res.data.order,
      });
      close();
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({
        type: ADD_ORDER_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
