export const TOGGLE_SECOND_HEADER = "TOGGLE_SECOND_HEADER";
export const SET_SECOND_HEADER_TAB = "SET_SECOND_HEADER_TAB";

export const ToggleSecondHeader = () => ({
  type: TOGGLE_SECOND_HEADER
});

export const SetSecondHeaderTab = (tabName) => ({
  type: SET_SECOND_HEADER_TAB,
  payload: {
    tabName
  }
});
