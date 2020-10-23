import {
  USERS_LOAD_ERROR,
  USERS_LOADING,
  USERS_LOAD_SUCCESS,
  LOGOUT_USER,
  ADD_CLIENT_LOADING,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_ERROR,
  ADD_MEASUREMENTS_SUCCESS,
  ADD_STAFF_LOADING,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_ERROR,
  GET_SUPPLY_SUCCESS,
  GET_ORDER_SUCCESS,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_LOADING,
  UPDATE_ORDER_LOADING,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_ERROR,
  UPDATE_SUPPLY_LOADING,
  UPDATE_SUPPLY_SUCCESS,
  UPDATE_SUPPLY_ERROR,
  CREATE_SUPPLY_LOADING,
  CREATE_SUPPLY_SUCCESS,
  UPDATE_MEASUREMENTS_SUCCESS,
  UPDATE_MEASUREMENTS_LOADING,
  UPDATE_MEASUREMENTS_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_LOADING,
  UPDATE_USER_ERROR,
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
        // addClient: {
        //   ...state.addClient,
        //   loading: false,
        //   data: payload,
        //   measurements: payload,
        //   error: null,
        // },
        users: {
          ...state.users,
          loading: false,
          data: [payload, ...state.users.data],
          measurements: [payload, ...state.users.data],
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

    case ADD_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          measurements: payload,
        },
      };

    case GET_SUPPLY_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          supply: payload,
        },
      };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: {
          ...state.orders,
          data: payload,
        },
      };

    // ADD TEAM MEMBER
    case ADD_STAFF_LOADING:
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: true,
          error: null,
        },
      };

    case ADD_STAFF_SUCCESS:
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          error: null,
          data: payload,
        },
        users: {
          ...state.users,
          loading: false,
          data: [payload, ...state.users.data],
        },
      };

    case ADD_STAFF_ERROR:
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          error: payload,
        },
        users: {
          ...state.users,
          loading: false,
          error: payload,
        },
      };

    // Adding an Order
    case ADD_ORDER_LOADING:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: true,
        },
      };

    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false, // myArray.filter((obj) => obj.id !== id)
          data: [payload, ...state.orders.data],
        },
      };

    // Updating an Order
    case UPDATE_ORDER_LOADING:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: true,
        },
      };

    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
          data: [
            payload,
            ...[...state.orders.data].filter((obj) => obj._id !== payload._id),
          ],
          // data: removeItemById(state.orders.data, payload._id),
        },
      };

    case UPDATE_ORDER_ERROR:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
        },
      };

    // Updating an Order
    case UPDATE_SUPPLY_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: true,
        },
      };

    case UPDATE_SUPPLY_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
          supply: [
            payload,
            ...[...state.users.supply].filter((obj) => obj._id !== payload._id),
          ],
        },
      };

    case UPDATE_SUPPLY_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
        },
      };

    case CREATE_SUPPLY_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: true,
        },
      };

    case CREATE_SUPPLY_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
          supply: [payload, ...state.users.supply],
        },
      };

    case UPDATE_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
          measurements: [
            payload,
            ...[...state.users.measurements].filter(
              (obj) => obj._id !== payload._id
            ),
          ],
        },
      };

    case UPDATE_MEASUREMENTS_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: true,
        },
      };

    case UPDATE_MEASUREMENTS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
        },
      };

    case UPDATE_USER_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: true,
        },
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
          data: [
            payload,
            ...[...state.users.data].filter((obj) => obj._id !== payload._id),
          ],
        },
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loadin: false,
        },
      };

    default:
      return state;
  }
};

export default users;
