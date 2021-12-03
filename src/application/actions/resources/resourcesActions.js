import { getResourceData } from "../../../infrastructure/api/api";
import nextId from "react-id-generator";
import {
  SET_ACTIVE_SECTION,
  SET_RESOURCES,
  SET_LOADING,
  SET_ERROR,
} from "./resourcesActionsConstants";

export const setActiveSection = (payload) => ({
  type: SET_ACTIVE_SECTION,
  payload,
});

const setResources = (payload, resourceType) => ({
  type: SET_RESOURCES,
  payload,
  resourceType,
});

const setLoading = (error) => ({
  type: SET_LOADING,
  payload: error,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchResources = (parameter) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(""));
  const response = await getResourceData(parameter);

  if (response.status === 200) {
    response.data.forEach((el) => {
      el.resources.forEach((re) => (re.id = nextId()));
    });

    dispatch(setResources(response.data, parameter));
    dispatch(setLoading(false));
  } else {
    dispatch(setError(response.message));
    dispatch(setLoading(false));
  }
};
