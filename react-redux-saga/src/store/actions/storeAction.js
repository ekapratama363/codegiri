import * as storeTypes from "./types/storeActionTypes";

export const getImage = (data) => {
  return {
    type: storeTypes.LOAD_IMAGES,
    data,
  };
};
export const setImage = (data) => {
  return {
    type: storeTypes.SET_IMAGE,
    data,
  };
};
export const addition = (data) => {
  return {
    type: storeTypes.ADDITION,
    data,
  };
};
export const startLoading = (data) => {
  return {
    type: storeTypes.START_LOADING,
    data,
  };
};
export const endLoading = (data) => {
  return {
    type: storeTypes.END_LOADING,
    data,
  };
};
