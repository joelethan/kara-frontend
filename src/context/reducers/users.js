import {
  USERS_LOAD_ERROR,
  USERS_LOADING,
  USERS_LOAD_SUCCESS,
  LOGOUT_USER,
  ADD_CLIENT_LOADING,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_ERROR,
} from "../../constants/actionTypes";

const users = (state, { payload, type }) => {
  switch (type) {
    case USERS_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    case USERS_LOAD_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          data: payload,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        users: {
          data: [],
        },
      };
    case USERS_LOAD_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: payload,
        },
      };

    case ADD_CLIENT_LOADING:
      return {
        ...state,
        addClient: {
          ...state.addClient,
          loading: true,
          error: null,
        },
      };

    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        addClient: {
          ...state.addClient,
          loading: false,
          data: payload,
          error: null,
        },
        users: {
          ...state.users,
          loading: false,
          data: [payload, ...state.users.data],
        },
      };

    case ADD_CLIENT_ERROR:
      return {
        ...state,
        addClient: {
          ...state.addClient,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default users;
