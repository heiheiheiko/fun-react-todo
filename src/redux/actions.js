import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM } from "./action-types";

export const addListItem = (payload) => ({ type: ADD_LIST_ITEM, payload })
export const updateListItem = (payload) => ({ type: UPDATE_LIST_ITEM, payload })
export const removeListItem = (id) => ({ type: REMOVE_LIST_ITEM, id })
