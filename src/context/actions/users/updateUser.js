import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../../../constants/actionTypes";

export default ({ close, form, Id }) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_LOADING,
  });
  axiosInstance()
    .put("/user/" + Id, form)
    .then((res) => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
      close();
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: CONNECTION_ERROR,
      });
    });
};
