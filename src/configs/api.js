export const apiAction = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER"
};

export const api = {
  [apiAction.LOGIN]: {
    url: "/api/index.php",
    method: "post",
    auth: false,
    data: {
      func: "login"
    }
  },
  [apiAction.REGISTER]: {
    url: "/api/index.php",
    method: "post",
    auth: false,
    data: {
      func: "register"
    }
  }
};
