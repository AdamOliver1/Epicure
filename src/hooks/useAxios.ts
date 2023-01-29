import Axios from "./baseUseAxios";

export const useAxiosGet = (url: string) => {
  return Axios(url, "get");
};

export const useAxiosPost = (url: string,body:{}) => {
  return Axios(url, "post");
};

export const useAxiosPut = (url: string) => {
  return Axios(url, "put");
};

export const useAxiosDelete = (url: string) => {
  return Axios(url, "delete");
};
