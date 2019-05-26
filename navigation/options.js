import Theme from '../styles/theme';

const theme = Theme('light');

export const tabBarOptions = {
    activeTintColor: theme.active,
    inactiveTintColor: theme.inactive,
    showLabel: false,
    showIcon: true,
    tabStyle: {
        backgroundColor: theme.backgroundColor,
    },
    style: {
        borderTopColor: theme.borderColor,
        shadowColor: theme.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 1,
    },
};

export const headerStyle = {
    backgroundColor: theme.backgroundColor,
    borderBottomColor: theme.borderColor,
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
}

export const headerTintColor = theme.fontColor;