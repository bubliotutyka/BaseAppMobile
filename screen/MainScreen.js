import React from 'react';
import Navigation from '../navigation/navigation';
import { connect } from 'react-redux';

// Local Import
import Theme from '../assets/styles/Theme';

const mapStateToProps = state => {
  return { user: state.user };
}

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    Theme.setTheme(props.user.theme);
  }

  render() {
    return (
      <Navigation />
    );
  }
}

export default connect(mapStateToProps)(MainApp);