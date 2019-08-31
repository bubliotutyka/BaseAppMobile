import React from 'react';
import { 
    createAppContainer,
    createBottomTabNavigator,
    BottomTabBar,
} from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';

// Local Import
// import Theme from '../../assets/styles/Theme';
import CustomBottomTabBar from './CustomBottomTabBar';
import Button1 from './Button/HomeButton';
import Button2 from './Button/ContactButton';
import Button3 from './Button/SettingsButton';

// const theme = Theme.getTheme();

const AppNavigator = createBottomTabNavigator(
  {
    Button1,
    Button2,
    Button3,
  },
  {
    tabBarComponent: CustomBottomTabBar,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Button1') {
          iconName = 'map';
        } else if (routeName === 'Button2') {
          iconName = 'comments';
        } else if (routeName === 'Button3') {
          iconName = `cogs`;
        }

        return <CustomIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

// Export
export default createAppContainer(AppNavigator);