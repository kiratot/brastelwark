import {
  LOAD_MORE_BRASTLEWARKERS,
  FILTER_BRASTLEWARKERS,
  LOAD_MORE_F_BRASTLEWARKERS,
  CHANGE_THEME,
} from "./appTypes";

export const loadMore = (data) => ({
  type: LOAD_MORE_BRASTLEWARKERS,
  payload: data,
});

export const filterData = (data, input) => ({
  type: FILTER_BRASTLEWARKERS,
  payload: data,
  input,
});

export const loadMoreFiltered = () => ({
  type: LOAD_MORE_F_BRASTLEWARKERS,
});

export const toggleTheme = () => ({
  type: CHANGE_THEME,
});
