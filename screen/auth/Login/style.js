import { StyleSheet } from 'react-native';

// Local Import
import Theme from '../../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return StyleSheet.create({
    container: {
      flex: 4,
      width: "100%",
      alignItems: 'center',
      marginTop: 50,
    },

    scrollContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
      backgroundColor: theme.backgroundColor,
    },

    scrollContent: {
      alignItems: 'center',
      paddingVertical: 100,
    },

    spaceTop: {
      flex: 1,
    },

    spaceBottom: {
      flex: 1,
    },

    textError: {
      color: theme.fontColorError,
    },

    image: {
      flex: 3,
      width: 100,
      height: 155,
    },
  });
}

export default getStyle;