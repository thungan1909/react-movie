import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://www.themoviedb.org",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
// AxiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     const additional = config;
//     additional.headers = additional.headers ?? {};
//     additional.headers.Authorization = token ? `Bearer ${token}` : "";
//     return additional;
//   },
//   (error) => {
//     // Do something with request error
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AxiosClient;
