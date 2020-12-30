import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class CustomTextInput extends Component {
  render() {
    return (
      <View>
        <View style={styles.flexDirectionRow}>
          <Text
            testID={this.props.textTestID}
            onPress={this.props.onPressText}
            style={[
              styles.label,
              this.props.color ? { color: this.props.textColor } : styles.color,
              this.props.fontSize
                ? { fontSize: this.props.fontSize }
                : { fontSize: 16 },
              this.props.labelStyle,
            ]}
          >
            {this.props.label}
          </Text>
          {/* shows required sign if value is true*/}
          {this.props.requiredField ? (
            <Text
              testID="required"
              style={[
                styles.label,
                styles.requiredSignColor,
                this.props.fontSize
                  ? { fontSize: this.props.fontSize }
                  : { fontSize: 16 },
                this.props.labelStyle,
              ]}
            >
              *
            </Text>
          ) : null}
        </View>
        <TextInput
          testID={this.props.inputTestID}
          placeholder={this.props.placeholder}
          placeholderTextColor="#c2c2c2"
          value={this.props.value}
          style={[styles.textInput, this.props.inputStyle]}
          onChangeText={this.props.onChangeText}
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : "default"
          }
          editable={true}
          onSubmitEditing={this.props.onSubmitEditing}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    fontFamily: "Montserrat-Medium",
    backgroundColor: "transparent",
    marginTop: 15,
  },
  color: {
    color: "#333333",
  },
  textInput: {
    fontFamily: "Montserrat-Regular",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#F1F1F1",
    borderRadius: 5,
    marginTop: 10,
  },
  flexDirectionRow: {
    display: "flex",
    flexDirection: "row",
  },
  requiredSignColor: {
    color: "#C0392B",
  },
});
