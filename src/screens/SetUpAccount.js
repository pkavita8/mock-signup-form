import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInputWithLabel";
import CustomText from "../components/CustomText";
import logo from "../assets/images/logo.png";
import { addNewUser } from "../actions/Users";
import { connect } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const SetUpAccount = () => {
  const [fullName, setFullName] = useState();
  const [upiID, setUpiID] = useState();
  const [currentProfession, setCurrentProfession] = useState();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  const onPressContinue = () => {
    const regexToValidateFullName = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    const regexToValidateUPIID = /^\w+@\w+$/;
    if (!fullName || !upiID) {
      setShowError(true);
      setErrorMessage("Please fill all fields");
    } else if (!fullName.match(regexToValidateFullName)) {
      setShowError(true);
      setErrorMessage("Please enter a valid name.");
    } else if (!upiID.match(regexToValidateUPIID)) {
      setShowError(true);
      setErrorMessage("Please enter a valid UPI ID.");
    } else {
      setShowError(false);
      navigation.navigate("ConfirmDetails", {
        user: {
          mobileNumber: route.params.mobileNumber,
          fullName,
          upiID,
          currentProfession,
        },
      });
    }
  };
  return (
    <View testID="mainContainer" style={styles.mainContainer}>
      <CustomText
        text="setup your GoDutch account"
        style={{ paddingLeft: 20, paddingBottom: 10 }}
      />
      <View testID="primaryContainer" style={styles.primaryContainer}>
        <Image testID="logo" style={styles.logo} source={logo} />
        <CustomText text="Current Profession" />
        <View testID="optionsContainer" style={styles.optionsContainer}>
          <CustomButton
            testID="student"
            text="Student"
            buttonStyle={{
              borderWidth: 1,
              borderColor:
                currentProfession === "Student" ? "#5A67F2" : "#F1F1F1",
            }}
            backgroundColor={"#FFFFFF"}
            color={currentProfession === "Student" ? "#5A67F2" : "#333333"}
            width={wp("38")}
            onPress={() => {
              setCurrentProfession("Student");
            }}
          />
          <CustomButton
            testID="professional"
            text="Professional"
            buttonStyle={{
              borderWidth: 1,
              borderColor:
                currentProfession === "Professional" ? "#5A67F2" : "#F1F1F1",
            }}
            backgroundColor={"#FFFFFF"}
            color={currentProfession === "Professional" ? "#5A67F2" : "#333333"}
            width={wp("38")}
            onPress={() => {
              setCurrentProfession("Professional");
            }}
          />
        </View>
        <CustomTextInput
          inputTestID="fullNameInput"
          label="Full Name"
          requiredField={true}
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
          }}
        />
        <CustomTextInput
          inputTestID="upiIDInput"
          label="UPI ID"
          requiredField={true}
          value={upiID}
          onChangeText={(text) => {
            setUpiID(text);
          }}
        />
        {showError ? (
          <CustomText
            text={errorMessage}
            color="#C0392B"
            fontSize={16}
            style={{ marginTop: 10 }}
          />
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
    marginBottom: 15,
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    top: hp("5"),
  },
});
export default SetUpAccount;
