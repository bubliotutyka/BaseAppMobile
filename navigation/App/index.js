import React from 'react';
import { 
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';

// Local Import
import DarkTheme from '../../assets/styles/themes/dark';
import LightTheme from '../../assets/styles/themes/light';
import Theme from '../../assets/styles/Theme';
import Button1 from './Button/HomeButton';
import Button2 from './Button/ContactButton';
import Button3 from './Button/SettingsButton';

const theme = Theme.getTheme();

const AppNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Button1,
            Button2,
            Button3,
        },
        {
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
            tabBarOptions: {
                activeTintColor: theme.active,
                inactiveTintColor: theme.inactive,
                showLabel: false,
                showIcon: true,
                style: {
                    backgroundColor: theme.tabBarBackgroundColor,
                    ...theme.shadow,
                },
            },
        }
    )
);

// activeTintColor: {
//     light: LightTheme.active,
//     dark: DarkTheme.active,
// },
// inactiveTintColor: {
//     light: LightTheme.inactive,
//     dark: DarkTheme.inactive,
// },

// Export
export default AppNavigator;