import _ from "lodash";
import { Platform, Alert } from "react-native";
import config from "../configs";
import { api } from "../configs/api";
import Storage from "../configs/storage";
import { getItem, removeItem } from "./asyncStorage";
import { Actions } from "react-native-router-flux";

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
    this.fetch = apiFetch(this);
  }
  get url() {
    return this._url || this.compositeUrl(this.urlParams);
  }
};

export const apiFetch = async (api, data = {}, options = {}) => {
  let url = config.domain + api.url;
  const method = api.method.toUpperCase();

  const body = {
    app_version: `${Platform.OS}  ${config.version}`,
    ...data,
    ...api.data
  };

  const requestOption = {
    method,
    headers: {
      Accept: "application/json"
    },
    ...options
  };

  const needAuth = api.auth;
  if (needAuth) {
    const token = await getItem(Storage.AUTHORIZATION);
    if (_.isEmpty(token)) {
      // Can't find auth token
      console.warn(`api ${api.url} needs auth, but can't find Authorization token in AsyncStorage`);
    } else {
      requestOption.headers.Authorization = `Bearer ${token}`;
    }
  }

  if (!_.isEmpty(body)) {
    if (method === "GET") {
      const parameterString = objectToParameters(body);
      url += `?${parameterString}`;
    } else {
      const formData = new FormData();
      for (const name in body) {
        const isValueValid = name && !_.isEmpty(body[name]) || _.isNumber(body[name];
        if (isValueValid) {
          formData.append(name, body[name]);
        }
      }
      requestOption.body = formData;
    }
  }

  try {
    // console.log(`url:${url}`, requestOption);
    const response = await fetch(url, requestOption);
    // console.log(`response status: ${response.status}`, response);
    const responseJson = await response.json();
    // console.log("responseJson", responseJson);
    return responseJson;
  } catch (error) {
    console.warn("api fetch error", error);
    return {
      result: null,
      error_code: null,
      msg: `fetch fail ${error.message}`
    };
  }
};

const objectToParameters = obj => {
  let str = "";
  for (const key in obj) {
    if (str !== "") {
      str += "&";
    }
    str += `${key}=${encodeURIComponent(obj[key])}`;
  }
  return str;
};
