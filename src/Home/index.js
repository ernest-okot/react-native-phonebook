import React from 'react';
import {DrawerNavigator} from "react-navigation";
import DrawerContent from "components/DrawerContent";
import Contacts from './Contacts'
import Feedback from "./Feedback";
import WhistlerBlower from "./WhistlerBlower";
import About from "./About";
import FAQs from "./FAQs";

export const routes = {
  'Contacts': {
    screen: Contacts,
    icon: 'ios-contacts-outline'
  },
  // 'UNRA Website': { screen: },
  'Share Feedback': {
    screen: Feedback,
    icon: 'ios-chatbubbles-outline'
  },
  'FAQs': {
    screen: FAQs,
    icon: 'ios-help-circle-outline'
  },
  'Whistler Blower': {
    screen: WhistlerBlower,
    icon: 'ios-megaphone-outline',
  },
  'About': {
    screen: About,
    icon: 'ios-information-circle-outline'
  },

};

// noinspection JSUnusedGlobalSymbols
export const config = {
  initialRouteName: 'Contacts',
  drawerWidth: 230,
  drawerPosition: 'right',
  contentComponent: DrawerContent,
  backBehavior: 'initialRoute'
};

export default DrawerNavigator(routes, config);