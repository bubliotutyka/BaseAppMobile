// Local Import
import Theme from '../../assets/styles/Theme';

let initialState = {
  isLogin: true,
  isAdmin: false,
  token: null,
  theme: "dark",
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "USER_CONNECT":
      return {
        ...state,
        isLogin: true,
        isAdmin: false,
        token:  "oui",
        ...action.payload, 
      };

    case "USER_LOGOUT":
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        token: null,
      };

    case "TOGGLE_THEME":
      Theme.setTheme(state.theme === "light" ? "dark" : "light");
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
};