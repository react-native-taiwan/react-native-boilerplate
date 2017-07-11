export const API_TYPE = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  GET_LIST: 'GET_LIST'
};

export const apiSpec = {
  /** Sample 
  [API_TYPE.GET_LIST]: {
    url: "/api/class",
    method: "get",
  },
  [API_TYPE.GET_LIST]: {
    method: "get",
    auth: false,
    data: {},
    compositeUrl: ({ classId }) => {
      return `/api/class/${classId}/list`;
    },
  } 
  */
  [API_TYPE.GET_LIST]: {
    url: "/api/class",
    method: "get",
  },
};
