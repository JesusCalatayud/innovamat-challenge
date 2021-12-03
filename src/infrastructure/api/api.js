import axios from "axios";
import { API_URL } from "./apiConstants";

export const getResourceData = async (parameter) => {
  const response = await axios
    .get(`${API_URL}/${parameter}`)
    .catch(function (error) {
      return error.toJSON();
    });

  return response;
};

export const getResourceDetail = async (resourceId) => {
  const response = await axios
    .get(`${API_URL}/resource/${resourceId}`)
    .catch(function (error) {
      return error.toJSON();
    });

  return response;
};
