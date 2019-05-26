import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import LoadingScreen from '../../../components/LoadingScreen';
import { headerStyle, headerTintColor } from '../../options';

export default createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: LoadingScreen,
                navigationOptions: {
                    title: 'Page 3',
                    headerStyle,
                    headerTintColor,
                }
            },
        }
    )
);