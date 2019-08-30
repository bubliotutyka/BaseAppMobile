import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import SettingsScreen from '../../../screen/app/Settings';

const Button = createAppContainer(
    createStackNavigator(
        {
            Settings: {
                screen: SettingsScreen,
                navigationOptions: {
                    title: 'Settings',
                    ...Style(),
                }
            },
        }
    )
);

// Export
export default Button;