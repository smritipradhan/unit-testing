import { APIMethod } from "./apiMethod";

export const getData = async (url) => {
  return APIMethod("GET", url);
};

export const deleteData = async (url) => {
  return APIMethod("DELETE", url);
};

export const postData = async (url, data = {}) => {
  return APIMethod("POST", url, data);
};

export const putData = async (url, data = {}) => {
  return APIMethod("PUT", url, data);
};
