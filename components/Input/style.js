import { StyleSheet } from 'react-native';

// Local Import
import Theme from '../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return StyleSheet.create({
    container: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      width: "80%",
      marginBottom: 30,
      ...options.containerStyle,
    },
  
    input: {
      width: '100%',
      fontSize: 20,
      color: theme.fontColor,
      ...options.inputStyle,
    },
  
    inputContainer: {
      marginTop: 5,
      marginBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 5,
      borderColor: theme.borderColor,
      borderBottomWidth: 3,
      flexDirection: 'row',
      width: '100%',
    },
  
    text: {
      fontSize: 20,
    },

    label: {
      color: theme.fontColor,
    },

    error: {
      color: theme.fontColorError,
    },
  });
}

export default getStyle;