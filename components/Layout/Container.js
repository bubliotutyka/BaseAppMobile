import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Container extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
                {this.props.children}
            </View>
        );
    }
}