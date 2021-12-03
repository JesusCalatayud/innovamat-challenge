import {
  SET_RESOURCE_DETAIL,
  SET_DETAIL_LOADING,
  SET_DETAIL_ERROR,
} from "../actions/detail/detailActionsConstants";

const reducer = (
  state = {
    resourceDetail: {},
    detailError: "",
    detailLoading: false,
  },
  action
) => {
  switch (action.type) {
    case SET_RESOURCE_DETAIL: {
      return { resourceDetail: action.payload };
    }

    case SET_DETAIL_LOADING: {
      return { ...state, detailLoading: action.payload };
    }

    case SET_DETAIL_ERROR: {
      return { ...state, detailError: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
