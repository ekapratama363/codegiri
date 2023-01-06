import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index";
import Api from "../api";

const api = new Api();

const getParams = (state) => {
  return state.store.params;
};

export function* loadImages() {
  yield put(actions.startLoading(true));
  try {
    let params = yield select(getParams);

    let response;
    if (params.query) {
      response = yield api.getImageListSearch(params);
    } else {
      response = yield api.getImageList(params);
    }

    let data 
    if (response?.data?.results) {
      data = response.data.results
    } else { 
      data = response.data
    }

    yield put(actions.setImage(data));
  } catch (error) {
    console.log("catch called", error);
  } finally {
    yield put(actions.endLoading(true));
  }
}

export function* addition() {
  try {
    let params = yield select(getParams);
    console.log("params", params);
  } catch (error) {
    console.log("catch called");
  } finally {
    console.log("Finally called");
  }
}
