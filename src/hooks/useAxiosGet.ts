import useAxios from "./baseUseAxios";

export const useAxiosGet = (url: string) => {
  return useAxios(url, "get");
};

export const useAxiosPost = (url: string) => {
    return useAxios(url, "post");
  };

export const useAxiosPut = (url: string) => {
    return useAxios(url, "put");
  };

export const useAxiosDelete = (url: string) => {
    return useAxios(url, "delete");
  };

