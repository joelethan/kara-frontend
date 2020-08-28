import {
  ADD_CLIENT_LOADING,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default (data) => (dispatch) => {
  dispatch({
    type: ADD_CLIENT_LOADING,
  });
  axiosInstance()
    .post("/user/client", data)
    .then((res) => {
      console.log("res", res);
      axiosInstance()
        .post("measurement/" + res.data._id)
        .then((res1) => {
          data.setShow(false);
        });
      dispatch({
        type: ADD_CLIENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({
        type: ADD_CLIENT_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
