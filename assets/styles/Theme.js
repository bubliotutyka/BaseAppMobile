// Import Local
import Color from './Color';

class Theme {
  static themeStyle = 'light';

  static _lightTheme = {
    active: Color.darkOrange,
    inactive: Color.darkGrey,
    tabBarBackgroundColor: Color.lightGrey,

    fontColor: Color.darkGrey,
    fontColorError: Color.red,
    backgroundColor: Color.white,

    checkbox: Color.darkOrange,

    borderColor: Color.darkOrange,
    shadowColor: Color.grey,
    buttonTextColor: Color.white,

    shadow: Color.shadow,
    hoverHhadow: Color.hoverShadow,
  }

  static _darkTheme = {
    active: Color.darkPurple,
    inactive: Color.darkGrey,
    tabBarBackgroundColor: Color.lightGrey,

    fontColor: Color.darkGrey,
    fontColorError: Color.red,
    backgroundColor: Color.white,

    checkbox: Color.darkPurple,

    borderColor: Color.darkPurple,
    shadowColor: Color.grey,
    buttonTextColor: Color.white,

    shadow: Color.shadow,
    hoverHhadow: Color.hoverShadow,
  }

  static getTheme = () => {
    return this[`_${this.themeStyle}Theme`];
  }

  static setTheme = (newTheme) => {
    this.themeStyle = newTheme
  }
}

// Export
export default Theme;

