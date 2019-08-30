import { StyleSheet } from 'react-native';

// Local Import
import Theme from '../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    checkboxContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  
    checkbox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      borderRadius: 2,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: theme.fontColor,
    },
  
    label: {
      color: theme.fontColor,
      fontSize: 20,
      marginRight: 10,
    },
  
    leftLabel: {
      color: theme.fontColor,
      fontSize: 20,
      marginLeft: 10,
    },
  });
}

export default getStyle;