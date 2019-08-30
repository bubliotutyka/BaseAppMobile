import { StyleSheet } from 'react-native';

// Local Import
import Theme from '../../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: theme.backgroundColor,
    },

    logoutBtn: {
      width: '100%',
      height: 100,
      paddingTop: 50,
    },

    debugBtn: {
      width: '100%',
      height: 75,
      paddingTop: 25,
    },
  });
}

export default getStyle;