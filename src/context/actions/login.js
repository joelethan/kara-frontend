import axiosInstance from "../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../constants/api";

export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axiosInstance()
    .post("/user/login", { email, password })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
