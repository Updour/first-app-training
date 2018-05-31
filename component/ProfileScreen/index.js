import React, { Component } from "react";
import Logout from "./Logout.js";
import About from "./About.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  Logout: { screen: Logout },
  About: { screen: About },
}));
