import React from 'react';
import {SwitchNavigator} from "react-navigation";
import Splash from "./Splash";
import Home from "./Home";

const RootNavigator = SwitchNavigator({
  'Splash': {
    screen: Splash
  },
  'Home': {
    screen: Home
  }
}, {
  initialRouteName: 'Splash'
});

console.ignoredYellowBox = ['Warning: component'];

export default RootNavigator;