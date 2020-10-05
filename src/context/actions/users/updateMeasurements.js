import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  UPDATE_MEASUREMENTS_LOADING,
  UPDATE_MEASUREMENTS_SUCCESS,
  UPDATE_MEASUREMENTS_ERROR,
} from "../../../constants/actionTypes";

export default ({ form, Id }) => (dispatch) => {
  dispatch({
    type: UPDATE_MEASUREMENTS_LOADING,
  });
  axiosInstance()
    .put("/measurement/" + Id, form)
    .then((res) => {
      dispatch({
        type: UPDATE_MEASUREMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_MEASUREMENTS_ERROR,
        payload: CONNECTION_ERROR,
      });
    });
};
