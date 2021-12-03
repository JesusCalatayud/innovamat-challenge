import { getResourceDetail } from "../../../infrastructure/api/api";

import {
  SET_RESOURCE_DETAIL,
  SET_DETAIL_LOADING,
  SET_DETAIL_ERROR,
} from "./detailActionsConstants";

const setResourceDetail = (payload) => ({
  type: SET_RESOURCE_DETAIL,
  payload,
});

const setDetailLoading = (loading) => ({
  type: SET_DETAIL_LOADING,
  payload: loading,
});

const setDetailError = (error) => ({
  type: SET_DETAIL_ERROR,
  payload: error,
});

export const fetchResourceDetail = (resourceId) => async (dispatch) => {
  dispatch(setDetailLoading(true));
  dispatch(setDetailError(""));
  const response = await getResourceDetail(resourceId);
  if (response.status === 200) {
    dispatch(setResourceDetail(response.data));
    dispatch(setDetailLoading(false));
  } else {
    dispatch(setDetailError(response.message));
    dispatch(setDetailLoading(false));
  }
};
