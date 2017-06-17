import _ from "lodash";
import { Platform, Alert } from "react-native";
import config from "../config";
import { api } from "../config/api";
import Storage from "../config/storage";
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

export const apiFetch = async (action, data = {}, options = {}) => {
  let url = config.domain + api[action].url;
  const method = api[action].method.toUpperCase();
  const body = {
    app_version: `${Platform.OS}  ${config.version}`,
    ...data,
    ...api[action].data,
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

  const auth = api[action].auth;
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
    console.log(`url:${url}`, requestOption);
    const response = await fetch(url, requestOption);
    console.log(`response status: ${response.status}`, response);
    responseJson = await response.json();
    console.log("responseJson", responseJson);
    return responseJson;
  } catch (error) {
    console.warn("error", error);
    return {
      result: -1,
      error_code: 87,
      msg: `fetch fail ${error.message}`
    };
  }
};
