// Local Import
import Theme from '../../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();

  return {
    headerTintColor: theme.header.icon,
    // headerTransparent: false,
    headerStyle: {
      backgroundColor: theme.header.background,
      ...theme.shadow,
    }
  }
}

// Export
export default getStyle;