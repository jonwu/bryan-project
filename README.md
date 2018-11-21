```
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme } = this.props;
    return (
      <View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(
  mapStateToProps,
)(SignupScreen);
```