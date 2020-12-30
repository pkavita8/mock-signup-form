import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import SignUp from "./screens/SignUp";
import SetUpAccount from "./screens/SetUpAccount";
import ConfirmDetails from "./screens/ConfirmDetails";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
            <Stack.Screen name="ConfirmDetails" component={ConfirmDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
