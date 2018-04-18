import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import Profile from "./Profile";
import List from "./List";

const ContactsNavigator = StackNavigator({
  'List': {
    screen: List
  },
  'Profile': {
    screen: Profile,
  },
}, {
  initialRouteName: 'List',
  navigationOptions: {
    headerRight: <HeaderRight/>,
    headerStyle: {
      backgroundColor: '#6cbd45'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontWeight: '100',
    }
  },
});

export default ContactsNavigator;