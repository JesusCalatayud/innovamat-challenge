import {
  SET_ACTIVE_SECTION,
  SET_RESOURCES,
  SET_LOADING,
  SET_ERROR,
} from "../actions/resources/resourcesActionsConstants";

const reducer = (
  state = {
    activeSection: "talleres",
    talleres: [],
    rincones: [],
    loading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION: {
      return { ...state, activeSection: action.payload };
    }
    case SET_RESOURCES: {
      return { ...state, [action.resourceType]: action.payload };
    }

    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }

    case SET_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
