import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';
import LoadingScreen from '../../components/LoadingScreen';


const Login = createAppContainer(
    createStackNavigator({
        Login: {
            screen: LoadingScreen,
            navigationOptions: {
                title: 'Login',
            }
        },
    })
);

const Register = createAppContainer(
    createStackNavigator({
        Register: {
            screen: LoadingScreen,
            navigationOptions: {
                title: 'Register',
            }
        },
    })
);

export default createAppContainer(
    createBottomTabNavigator(
        {
            Login,
            Register,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Login') {
                    iconName = 'user';
                } else if (routeName === 'Register') {
                    iconName = 'user-plus';
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
    )
);