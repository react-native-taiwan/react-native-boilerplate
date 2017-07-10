export const apiActions = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER"
};

export const Api = class {
  constructor(props, urlParams) {
    this._url = props.url || null;
    this.method = props.method || "get";
    this.auth = props.auth || false;
    this.data = props.data || {};
    this.compositeUrl =
      props.compositeUrl ||
      function () {
        return this.url;
      };
    this.urlParams = urlParams;
  }
  get url() {
    return this._url || this.compositeUrl(this.urlParams);
  }
};

export const apiSpec = {
  /** Sample 
  [apiActions.GET_LIST]: {
    url: "/api/class",
    method: "get",
  },
  [apiActions.GET_LIST]: {
    method: "get",
    auth: false,
    data: {},
    compositeUrl: ({ classId }) => {
      return `/api/class/${classId}/list`;
    },
  } 
  */
};
