import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { generateStylesSelector } from 'common/selectors';
import CreateScheduleScreen from 'view/screens/CreateScheduleScreen';
import HomeScreen from 'view/screens/HomeScreen';
import { createStackNavigator } from 'react-navigation';

function generateStyles(theme) {
  return {}
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CreateScheduleScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return <RootStack/>;
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
)(Root);
