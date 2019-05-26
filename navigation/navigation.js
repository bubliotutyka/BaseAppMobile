import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Layout/Container';

const StackNavigator = createStackNavigator({
    Example: {
        screen: Container,
        navigationOptions: {
            title: 'Title',
        }
    },
});

export default createAppContainer(createBottomTabNavigator(
    {
        btn1: StackNavigator,
        btn2: StackNavigator,
        btn3: StackNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'btn1') {
                iconName = 'align-right';
            } else if (routeName === 'btn2') {
                iconName = 'align-justify';
            } else if (routeName === 'btn3') {
                iconName = `align-left`;
            }
    
            return <CustomIcons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: '#00a8ff',
          inactiveTintColor: '#718093',
          showLabel: false,
          showIcon: true,
        },
      }
));