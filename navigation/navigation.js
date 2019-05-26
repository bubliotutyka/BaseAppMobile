import { createStackNavigator, createAppContainer } from 'react-navigation';
import Container from '../components/Layout/Container';

const StackNavigator = createStackNavigator({
    Test: {
        screen: Container,
        navigationOptions: {
            title: 'Test',
        }
    }
});

export default createAppContainer(StackNavigator);