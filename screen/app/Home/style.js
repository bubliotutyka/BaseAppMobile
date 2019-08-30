import { StyleSheet } from 'react-native';

// Local Import
import Theme from '../../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundColor,
    },
  });
}

export default getStyle;