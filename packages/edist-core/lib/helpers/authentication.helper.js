import {
  clearAll,
  clearStorage,
  getStorage,
  setStorage
} from "./storage.helper";
import { id_token } from "../constants/common.constant";

export const checkUserSession = () => {
  debugger;
  if (getStorage(id_token)) return true;
  else return false;
};

export const deleteUserSession = () => {
  clearStorage(id_token);
};
