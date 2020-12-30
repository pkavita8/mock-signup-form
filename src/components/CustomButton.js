import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default class CustomButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          testID={this.props.testID}
          onPress={this.props.onPress}
          style={[
            styles.button,
            this.props.backgroundColor
              ? { backgroundColor: this.props.backgroundColor }
              : styles.backgroundColor,
            this.props.width ? { width: +this.props.width } : styles.width,
            this.props.buttonStyle,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              this.props.color ? { color: this.props.color } : styles.color,
              this.props.padding
                ? { padding: this.props.padding }
                : { padding: 6 },
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
