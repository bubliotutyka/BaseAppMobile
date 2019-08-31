import React from 'react';
import {connect} from 'react-redux';
import {BottomTabBar} from 'react-navigation';

// Local Import
import Theme from '../../assets/styles/Theme';

const mapStateToProps = state => {
  return { user: state.user };
}

class CustomBottomTabBar extends React.Component {
  render() {
    const theme = Theme.getTheme();

    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={theme.active}
        inactiveTintColor={theme.inactive}
        showLabel={false}
        showIcon={true}
        style={{
            backgroundColor: theme.tabBarBackgroundColor,
            ...theme.shadow,
        }}
      />
    )
  }
}


// Export
export default connect(mapStateToProps)(CustomBottomTabBar);