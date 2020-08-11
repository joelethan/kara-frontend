import axiosInstance from "../../helpers/axios";

export const login = ({ email, password }) => (dispatch) => {
  axiosInstance
    .post("/user/login", { email, password })
    .then((res) => console.log("res >>>>>>>>>>>>", res))
    .catch((er) => console.log("er >>>>>>>>>>>>", er));
};
