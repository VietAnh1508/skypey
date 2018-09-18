import { SET_ACTIVE_USER_ID } from "../constants/action-type";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});
