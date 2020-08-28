import axiosInstance from "../../../helpers/axiosInstance";
import {
  USERS_LOAD_ERROR,
  USERS_LOAD_SUCCESS,
  USERS_LOADING,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";

export default (history) => (dispatch) => {
  dispatch({ type: USERS_LOADING });
  axiosInstance(history)
    .get("/user/all")
    .then((res) => {
      dispatch({ type: USERS_LOAD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: USERS_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
