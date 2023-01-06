import * as storeTypes from "../actions/types/storeActionTypes";

const initialState = {
    images: [],
    loading: false
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeTypes.LOAD_IMAGES:
            return {
                ...state,
                images: state.images
            };
            break;
        case storeTypes.SET_IMAGE:
            return {
                ...state,
                images: action.data
            };
            break;
        case storeTypes.ADDITION:
            return {
                ...state,
                params: action.data
            };
            break;
        case storeTypes.START_LOADING:
            return {
                ...state,
                loading: true
            };
            break;
        case storeTypes.END_LOADING:
            return {
                ...state,
                loading: false
            };
            break;
        default:
            return state;
    }
};

export default storeReducer;
