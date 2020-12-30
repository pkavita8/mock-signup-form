import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import { addNewUser } from "../actions/Users";
import { connect } from "react-redux";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
const SetUpAccount = () => {
  const { dispatch } = useNavigation();
  const route = useRoute();
  const onPressContinue = () => {
    dispatch(
      CommonActions.reset({
        index: 0,
        routeNames: ["SignUp"],
      })
    );
  };

  return (
    <View testID="mainContainer" style={styles.mainContainer}>
      <CustomText
        text="Your Details"
        style={{ paddingLeft: 20, paddingBottom: 10 }}
      />
      <View testID="primaryContainer" style={styles.primaryContainer}>
        <CustomText text="Name" />
        <View style={styles.bottomLine}></View>
        <CustomText text={route.params.user.fullName} color={"#5A67F2"} />
        <View style={styles.bottomLine}></View>
        <CustomText text="Mobile No" />
        <View style={styles.bottomLine}></View>
        <CustomText text={route.params.user.mobileNumber} color={"#5A67F2"} />
        <View style={styles.bottomLine}></View>
        <CustomText text="UPI Id" />
        <View style={styles.bottomLine}></View>
        <CustomText text={route.params.user.upiID} color={"#5A67F2"} />
        <View style={styles.bottomLine}></View>
        {route.params.user.currentProfession ? (
          <>
            <CustomText text="Profession" />
            <View style={styles.bottomLine}></View>
            <CustomText
              text={route.params.user.currentProfession}
              color={"#5A67F2"}
            />
            <View style={styles.bottomLine}></View>
          </>
        ) : null}

        <CustomButton
          testID="continueButton"
          text="Continue"
          buttonStyle={{
            marginTop: 50,
          }}
          onPress={onPressContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F8F8F8",
    height: hp("100"),
    width: wp("100"),
    display: "flex",
    justifyContent: "center",
  },
  primaryContainer: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: wp("90"),
    height: hp("85"),
    padding: 20,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bottomLine: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    borderStyle: "dashed",
    borderRadius: 0.05,
  },
});

export default SetUpAccount;
