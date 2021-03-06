import {
  CREATE_SUPPLY_LOADING,
  CREATE_SUPPLY_SUCCESS,
  CREATE_SUPPLY_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default ({ data, close }) => (dispatch) => {
  dispatch({
    type: CREATE_SUPPLY_LOADING,
  });
  axiosInstance()
    .post("/supply", data)
    .then((res) => {
      dispatch({
        type: CREATE_SUPPLY_SUCCESS,
        payload: res.data.supply,
      });
      close();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_SUPPLY_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
