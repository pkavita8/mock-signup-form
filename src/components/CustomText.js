import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class CustomText extends Component {
  render() {
    return (
      <Text
        testID={this.props.testID}
        onPress={this.props.onPress}
        style={[
          styles.text,
          this.props.color ? { color: this.props.color } : styles.color,
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Medium",
    backgroundColor: "transparent",
    fontWeight: "500",
  },
  color: {
    color: "#333333",
  },
});
