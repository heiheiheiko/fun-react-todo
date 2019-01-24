import { ADD_LIST_ITEM } from "./action-types";

export function addListItem(payload) {
  return { type: ADD_LIST_ITEM, payload }
};
