import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import {palette} from "style";
import ScreenContent from "components/ScreenContent";

class Feedback extends React.Component {

  static navigationOptions = {
    title: 'Share Feedback',
    headerRight: <HeaderRight/>,
    headerStyle: {
      backgroundColor: palette.primary
    },
    headerTintColor: palette.textLight,
    headerTitleStyle: {
      color: palette.textLight,
      fontWeight: '100',
    }
  };

  render() {
    return <ScreenContent />
  }
}

export default  StackNavigator({Feedback: {screen: Feedback}});