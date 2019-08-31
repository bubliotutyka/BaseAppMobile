import { 
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

// Local Import
// import Style from './style';
import SettingsScreen from '../../../screen/app/Settings';

const Button = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
    Test: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Test',
      },
    },
  }
)

// Export
export default createAppContainer(Button);