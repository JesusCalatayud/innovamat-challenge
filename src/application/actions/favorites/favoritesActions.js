import { SET_FAVORITES } from "./favoritesActionsConstants";

const setFavorites = (payload) => ({
  type: SET_FAVORITES,
  payload,
});

export const handleFavorite = (resource, favoritesState) => (dispatch) => {
  const favorites = { ...favoritesState };
  const { resourceId } = resource;
  const resourceType = resource.resourceType.toLowerCase();
  const favoritesIds = favorites[resourceType].map((fav) => fav.resourceId);

  if (!favoritesIds.includes(resourceId)) {
    favorites[resourceType].push(resource);
  } else {
    const filteredFavorites = favorites[resourceType].filter(
      (fav) => fav.resourceId !== resourceId
    );
    favorites[resourceType] = filteredFavorites;
  }

  dispatch(setFavorites(favorites));
};
