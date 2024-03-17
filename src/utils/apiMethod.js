import axios from "axios";

let axiosInstance;
axios.defaults.withCredentials = true;

export const APIMethod = async (
  method,
  url,
  data = {},
  contentType = "application/json",
  responseType = ""
) => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      withCredentials: true,
      baseURL: "https://jsonplaceholder.typicode.com/todos",
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return axiosInstance({
    method: method,
    url: url,
    data: data,
    responseType,
    headers: {
      "content-type": contentType,
      withCredentials: true,
    },
  });
};
