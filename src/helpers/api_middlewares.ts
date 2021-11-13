import axios from 'axios';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const apiMiddleware = {
  // Communicate with the Auth service
  postAuthApi: async (
    endPoint: string,
    data?: {
      email: string;
      password: string;
      name?: string;
      phone?: string;
    },
    headers?: any,
  ) => {
    try {
      return axios.post(endPoint, data, {
        headers: {
          ...headers,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },
  GetAuthApi: async (endPoint: string, headers: any) => {
    try {
      return axios.get(endPoint, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...headers,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },

  //
  postDataAPI: async (data: any, endPoint: string) => {
    const URL = endPoint;
    try {
      return axios.post(URL, data);
    } catch (e) {
      console.error(e);
    }
  },

  getDataApi: async (endPoint: string) => {
    const URL = endPoint;
    try {
      return axios.get(URL);
    } catch (e) {
      console.error(e);
    }
  },
  postAPIWithToken: async (data: any, endPoint: string, token: string) => {
    const URL = endPoint;
    try {
      return axios.post(URL, data, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
      });
    } catch (e) {
      console.error(e);
    }
  },
  putAPIWithToken: async (data: any, endPoint: string, token: string) => {
    const URL = endPoint;
    try {
      return axios.put(URL, data, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
      });
    } catch (e) {
      console.error(e);
    }
  },
  deleteAPIWithToken: async (data: any, endPoint: string, token: string) => {
    const URL = endPoint;
    try {
      return axios.delete(URL, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        data,
      });
    } catch (e) {
      console.error(e);
    }
  },
  getApiwithToken: async (token: string, endPoint: string, params?: any) => {
    const URL = endPoint;
    try {
      return axios.get(URL, {
        params: params,
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
      });
    } catch (e) {
      console.error(e);
    }
  },
};

export default apiMiddleware;
