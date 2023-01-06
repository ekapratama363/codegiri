import { takeLatest, all, takeEvery } from "redux-saga/effects";
import * as storeTypes from "../actions/types/storeActionTypes";
import { loadImages, addition } from "./storeSaga";

export function* watchStore() {
    yield all([takeLatest(storeTypes.LOAD_IMAGES, loadImages)]);
    yield all([takeLatest(storeTypes.ADDITION, addition)]);
}
