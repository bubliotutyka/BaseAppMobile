import Color from './color';

const lightTheme = {
    active: Color.lightBlue,
    inactive: Color.grey,
    backgroundColor: Color.white,
    borderColor: Color.lightGrey,
    shadowColor: Color.grey,
}

const darkTheme = {
    active: Color.lightBlue,
    inactive: Color.grey,
    backgroundColor: Color.white,
    borderColor: Color.lightGrey,
    shadowColor: Color.grey,
}

export default (theme) => {
    if (theme === 'dark') {
        return darkTheme;
    }
    else if (theme === 'light') {
        return lightTheme;
    }
}