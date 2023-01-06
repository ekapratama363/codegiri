import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index";
import Api from "../api";

const api = new Api();

const getParams = (state) => {
  console.log('state', state)
  return state.store.params
};

export function* loadImages() {
  yield put(actions.startLoading(true));
  try {
    let params = yield select(getParams)
    const response = yield api.getImageList(params);
    yield put(actions.setImage(response.data));
  } catch (error) {
    console.log("catch called", error);
  } finally {
    yield put(actions.endLoading(true));
  }
}

export function* addition() {
  try {
    let params = yield select(getParams)
    console.log("params", params);
  } catch (error) {
    console.log("catch called");
  } finally {
    console.log("Finally called");
  }
}
