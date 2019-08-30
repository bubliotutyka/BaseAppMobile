// Import Local
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

class Theme {
  static _themeStyle = 'dark';
  static _lightTheme = lightTheme;
  static _darkTheme = darkTheme;

  static getTheme = () => {
    return this[`_${this._themeStyle}Theme`];
  }

  static setTheme = (newTheme) => {
    this._themeStyle = newTheme
  }
}

// Export
export default Theme;

// https://medium.com/@hmajid2301/theme-your-expo-app-with-redux-and-react-navigation-461020e5fc1e