import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { BLUE } from "../../common/utils/colors";
import { updateName } from "common/reducers/app/actions"; 


class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''}

  }

  handleOnSubmit = () => {
    this.props.updateName(this.state.name);
  }
  
  render() {
    const { gstyles, theme, name } = this.props;
    return (
      <View>
        <Text>{this.state.name}</Text>        
        <Text>{name}</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ name: text })}
          value= {this.state.name}
        />
        <TouchableOpacity onPress={this.handleOnSubmit}>
            <View style={{ padding: 8, backgroundColor: "blue"}}>
                <Text>
                    submit
                </Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    name: state.app.name
  };
}

export default connect(mapStateToProps, { updateName })(SignupScreen);
