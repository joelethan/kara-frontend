import {
  ADD_STAFF_LOADING,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default (data) => (dispatch) => {
  dispatch({
    type: ADD_STAFF_LOADING,
  });
  axiosInstance()
    .post("/user/register", data)
    .then((res) => {
      data.setShow(false);
      dispatch({
        type: ADD_STAFF_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_STAFF_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
