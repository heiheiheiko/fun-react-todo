import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM } from "./action-types";

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
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_LIST_ITEM) {
    return Object.assign({}, state, {
      listItems: state.listItems.concat(action.payload)
    });
  }

  if (action.type === UPDATE_LIST_ITEM) {
    const listItems = state.listItems.map((listItem) => {
      if (listItem.id === action.payload.id) {
        return action.payload
      } else {
        return listItem;
      }
    });

    return Object.assign({}, state, { 
      listItems: listItems
    });
  }

  if (action.type === REMOVE_LIST_ITEM) {
    return Object.assign({}, state, {
      listItems: state.listItems.filter((listItem) => listItem.id !== action.id)
    });
  }
  return state;
}

export default rootReducer;
