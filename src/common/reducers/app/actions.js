import * as ActionTypes from "./actionTypes";
import BackendAPI from "common/api/BackendApi";

export function updateName(name) {
  return { type: ActionTypes.UPDATE_NAME, name: name };
}

