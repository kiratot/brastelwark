import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./dataTypes";

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});

// async
export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(fetchDataSuccess(data.Brastlewark));
      })
      .catch((error) => dispatch(fetchDataError(error.message)));
  };
};
