import { ADD_NEW_USER } from "../actions/Types";
const initalState = {
  allUsers: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    default:
      return state;
  }
}
