import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../../../constants/actionTypes";

export default ({ form, Id }) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_LOADING,
  });
  axiosInstance()
    .put("/user/" + Id, form)
    .then((res) => {
      console.log("res", res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: CONNECTION_ERROR,
      });
    });
};
