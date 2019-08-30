let initialState = {
  isLogin: false,
  isAdmin: false,
  token: null,
  theme: null,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "USER_CONNECT":
      return {
        isLogin: true,
        isAdmin: false,
        token:  "oui",
        theme: null,
        ...action.payload, 
      };

    case "USER_LOGOUT":
      return {
        isLogin: false,
        isAdmin: false,
        token: null,
        theme: null,
      };

    default:
      return state;
  }
};