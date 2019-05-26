import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import LoadingScreen from '../components/LoadingScreen';
import AuthNavigator from './Auth';
import AppNavigator from './App';

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: LoadingScreen,
        App: AppNavigator,
        Auth: AuthNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(SwitchNavigator);