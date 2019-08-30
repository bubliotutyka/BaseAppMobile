import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import HomeScreen from '../../../screen/app/Home';

const Button = createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    title: 'Home',
                    ...Style(),
                }
            },
        }
    )
);

// Export
export default Button;