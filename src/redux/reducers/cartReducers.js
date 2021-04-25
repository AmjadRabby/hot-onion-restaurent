import {
  ADD_TO_CART,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REMOVE_FROM_CART,
} from "../actions/cartAction";

const initialState = {
  cart: [],
  auth: {},
  isLoggedIn: false,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    //cart reducers
    case ADD_TO_CART:
      const newItem = {
        food: action.payload,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const removeId = action.payload;
      const newFoodCart = state.cart.filter((food) => food.cartId !== removeId);
      return { ...state, cart: newFoodCart };

    //auth reducers
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case LOGOUT:
      return { ...state, auth: {} };

    default:
      return state;
  }
};

export default cartReducers;
