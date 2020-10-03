import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";
import {
  UPDATE_SUPPLY_LOADING,
  UPDATE_SUPPLY_SUCCESS,
  UPDATE_SUPPLY_ERROR,
} from "../../../constants/actionTypes";

export default ({ data, Id }) => (dispatch) => {
  dispatch({
    type: UPDATE_SUPPLY_LOADING,
  });
  axiosInstance()
    .put("/supply/" + Id, data)
    .then((res) => {
      console.log("res", res);
      dispatch({
        type: UPDATE_SUPPLY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: UPDATE_SUPPLY_ERROR,
        payload: CONNECTION_ERROR,
      });
    });
};
