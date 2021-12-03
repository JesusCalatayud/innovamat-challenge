import { SET_FAVORITES } from "../actions/favorites/favoritesActionsConstants";

const reducer = (
  state = {
    talleres: [],
    rincones: [],
  },
  action
) => {
  switch (action.type) {
    case SET_FAVORITES: {
      return { ...action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
