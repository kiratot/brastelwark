import {
  LOAD_MORE_BRASTLEWARKERS,
  FILTER_BRASTLEWARKERS,
  LOAD_MORE_F_BRASTLEWARKERS,
  CHANGE_THEME,
} from "./appTypes";

import themeLight, { themeDark } from "../../styles/theme";

const initialState = {
  themeMode: "Light",
  theme: themeLight,
  maxShown: 10,
  count: 0,
  filteredCount: 0,
  inputValue: "",
  filteredBW: [],
  filteredBWShown: [],
  cachedBW: [],
};

//helper function to show only maxShown (10 in our case) elements at a time for better performance in our GUI
const pushByMaxShown = (count, maxShown, data) => {
  //loading our data from the last index (count) by 10 elements each time (maxShown)
  let map = [];
  let i = count;
  for (i; i < count + maxShown && i < data.length; i++) {
    map.push(data[i]);
  }
  return [map, i];
};

const appReducer = (state = initialState, action) => {
  let map = [];
  let i = 0;
  const { type, payload, input } = action;
  switch (type) {
    case LOAD_MORE_BRASTLEWARKERS:
      [map, i] = pushByMaxShown(state.count, state.maxShown, payload);

      //we return the concatenated array from the last shown data and the new mapped data
      //this is triggered by the infinite scroll functionality
      return {
        ...state,
        cachedBW: [...state.cachedBW, ...map],
        count: i,
      };
    case FILTER_BRASTLEWARKERS:
      //Filtering by name, age, profession
      let filteredBW = [];

      if (input.length > 0) {
        filteredBW = payload.filter(
          ({ name, age, professions }) =>
            name.toLowerCase().includes(input.toLowerCase()) ||
            age.toString().toLowerCase().includes(input.toLowerCase()) ||
            professions
              .map((e) => e.toLowerCase())
              .includes(input.toLowerCase())
        );
      }

      return {
        ...state,
        inputValue: input,
        filteredBW,
        filteredBWShown: [],
        filteredCount: 0,
        cachedBW: [],
        count: 0,
      };

    case LOAD_MORE_F_BRASTLEWARKERS:
      // infinite scroll for our filtered data too!
      [map, i] = pushByMaxShown(
        state.filteredCount,
        state.maxShown,
        state.filteredBW
      );
      return {
        ...state,
        filteredBWShown: [...state.filteredBWShown, ...map],
        filteredCount: i,
      };
    case CHANGE_THEME:
      // theme toggling between dark and light color mode
      return state.themeMode === "Light"
        ? { ...state, themeMode: "Dark", theme: themeDark }
        : { ...state, themeMode: "Light", theme: themeLight };
    default:
      return state;
  }
};

export default appReducer;
