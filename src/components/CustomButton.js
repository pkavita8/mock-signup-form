import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default class CustomButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          testID={this.props.testID}
          onPress={this.props.onPress}
          style={styles.button}
        >
          <Text
            style={[
              styles.buttonText,
              this.props.color ? { color: this.props.color } : styles.color,
            ]}
          >
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  width: {
    width: wp("50"),
  },
  color: {
    color: "#FFFFFF",
  },
  backgroundColor: {
    backgroundColor: "#5A67F2",
    borderRadius: 5,
  },
});
