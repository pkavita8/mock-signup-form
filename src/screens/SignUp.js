import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import logo from "../assets/images/logo.png";
import goDutchlogoText from "../assets/images/goDutchlogoText.png";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInputWithLabel";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const onPressContinue = () => {
    const regexToValidateMobileNUmber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!mobileNumber) {
      setShowError(true);
      setErrorMessage("Please enter a mobile number.");
    } else if (mobileNumber.match(regexToValidateMobileNUmber)) {
      setShowError(false);
      navigation.navigate("SetUpAccount", { mobileNumber });
    } else {
      setShowError(true);
      setErrorMessage("Please enter a valid mobile number.");
    }
  };

  return (
    <View testID="mainContainer" style={styles.mainContainer}>
      <View testID="primaryContainer" style={styles.primaryContainer}>
        <View
          testID="logoContainer"
          style={[styles.flexDirectionRow, styles.logoContainer]}
        >
          <Image testID="logo" style={styles.logo} source={logo} />
          <Image
            testID="logoText"
            style={styles.logoText}
            source={goDutchlogoText}
          />
        </View>
        <View style={styles.bottomLineOfLogo}></View>
        <CustomTextInput
          inputTestID="mobileNumberInput"
          label="Mobile Number"
          requiredField={true}
          value={mobileNumber}
          onChangeText={(text) => {
            if (text.length <= 10) {
              setMobileNumber(text);
              setShowError(false);
            } else {
              setShowError(true);
              setErrorMessage("Number cannot exceed 10 digits. ");
            }
          }}
          keyboardType="phone-pad"
          onSubmitEditing={onPressContinue}
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
    backgroundColor: "#FFFFFF",
    height: hp("50"),
    width: wp("90"),
    alignSelf: "center",
    padding: 20,
  },
  flexDirectionRow: {
    display: "flex",
    flexDirection: "row",
  },
  logoContainer: {
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  logoText: {
    height: 35,
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: 10,
  },
  bottomLineOfLogo: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    borderStyle: "dashed",
    borderRadius: 0.2,
  },
});

export default SignUp;
