import {
  TOGGLE_SECOND_HEADER,
  SET_SECOND_HEADER_TAB
} from "../../actions/secondHeader";

const initialState = {
  toggle: true,
  tab: "all"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SECOND_HEADER:
      return {
        ...state,
        toggle: !state.toggle
      };
    case SET_SECOND_HEADER_TAB:
      return {
        ...state,
        tab: action.payload.tabName
      };
    default:
      return state;
  }
};

export default reducer;
