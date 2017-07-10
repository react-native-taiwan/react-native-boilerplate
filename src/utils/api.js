import _ from "lodash";
import { Platform, Alert } from "react-native";
import config from "../configs";
import { api } from "../configs/api";
import Storage from "../configs/storage";
import { getItem, removeItem } from "./asyncStorage";
import { Actions } from "react-native-router-flux";

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

export const apiFetch = async (api, data = {}, options = {}) => {
  let url = config.domain + api.url;
  const method = api.method.toUpperCase();
  const body = {
    app_version: `${Platform.OS}  ${config.version}`,
    ...data,
    ...api.data,
    type: data.type || "A"
  };

  const token = await getItem(Storage.AUTHORIZATION);
  const requestOption = {
    method,
    headers: {
      Accept: "application/json"
    },
    ...options
  };

  const auth = api.auth;
  if (auth) {
    if (_.isEmpty(token)) {
      // Can't find auth token
    } else {
      requestOption.headers.Authorization = `Bearer ${token}`;
    }
  }

  if (!_.isEmpty(body)) {
    if (method === "GET") {
      url += `?${objectToParameters(body)}`;
    } else {
      const formData = new FormData();
      for (const name in body) {
        if ((name && !_.isEmpty(body[name])) || _.isNumber(body[name])) {
          console.log(name, body[name]);
          formData.append(name, body[name]);
        }
      }
      requestOption.body = formData;
    }
  }

  let responseJson;
  try {
    // console.log(`url:${url}`, requestOption);
    const response = await fetch(url, requestOption);
    // console.log(`response status: ${response.status}`, response);
    responseJson = await response.json();
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
