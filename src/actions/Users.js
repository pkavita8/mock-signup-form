import { ADD_NEW_USER } from "./Types";
//saves new user's information
export const addNewUser = (user) => (dispatch) => {
  dispatch({
    type: ADD_NEW_USER,
    payload: user,
  });
};
