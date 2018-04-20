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
    icon: 'contacts'
  },
  // 'UNRA Website': { screen: },
  'Share Feedback': {
    screen: Feedback,
    icon: 'question-answer'
  },
  'Whistler Blower': {
    screen: WhistlerBlower,
    icon: 'record-voice-over',
  },
  'FAQs': {
    screen: FAQs,
    icon: 'help-outline'
  },
  'About': {
    screen: About,
    icon: 'info-outline'
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