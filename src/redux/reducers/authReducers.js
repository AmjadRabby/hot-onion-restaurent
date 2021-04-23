// import {
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   REGISTER_FAIL,
//   REGISTER_SUCCESS,
// } from "../actions/authAction";

// const initialState = {
//   user: null,
// };

// // console.log(initialState.user);

// const authReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: action.payload.user,
//       };

//     case REGISTER_FAIL:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };

//     case LOGIN_SUCCESS:
//       const newUserAdd = action.payload;
//       const loggedInUser = { ...state.user, newUserAdd };
//       console.log(loggedInUser);
//       return {
//         ...state,
//         user: newUserAdd,
//       };
//     case LOGIN_FAIL:
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//       };

//     default:
//       return state;
//   }
// };
// export default authReducers;
