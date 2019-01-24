import { ADD_LIST_ITEM } from "./action-types";

const initialState = {
  listItems: [
    {
      id: 1,
      label: "Waschen",
      isDone: true
    },
    {
      id: 2,
      label: "Aufräumen",
      isDone: false
    }
  ],
  addLabelFieldValue: "",
  nextListItemId: 3
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_LIST_ITEM) {
    return Object.assign({}, state, {
      listItems: state.listItems.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
