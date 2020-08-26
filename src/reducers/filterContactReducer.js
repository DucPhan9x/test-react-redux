import {
  UPDATE_SEARCH_KEYWORD,
  UPDATE_ONLY_EVEN_FILTER,
  UPDATE_PAGE_NO,
  UPDATE_COUNTRY,
  INCREMENT_PAGE_NO,
} from "../constants/actionType";

export const initialState = {
  searchKeyword: "",
  isOnlyEven: false,
  countryId: 0,
  pageNo: 1,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
        pageNo: 1,
      };

    case UPDATE_ONLY_EVEN_FILTER:
      return {
        ...state,
        isOnlyEven: action.payload,
      };

    case UPDATE_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload,
      };

    case INCREMENT_PAGE_NO:
      return {
        ...state,
        pageNo: state.pageNo + 1,
      };

    case UPDATE_COUNTRY:
      return {
        ...state,
        countryId: action.payload,
        pageNo: 1,
      };

    default:
      return state;
  }
}
