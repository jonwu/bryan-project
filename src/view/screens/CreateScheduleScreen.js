import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { generateStylesSelector } from 'common/selectors';

function generateStyles(theme) {
  return {}
}
class CreateScheduleScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View>
      </View>
    );
  }
}

const stylesSelector = generateStylesSelector(generateStyles);
function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    styles: stylesSelector(state.settings.theme),
  };
}

export default connect(
  mapStateToProps,
)(CreateScheduleScreen);
