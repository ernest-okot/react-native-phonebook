import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import {palette} from "style";
import ScreenContent from "components/ScreenContent";

class FAQs extends React.Component {

  static navigationOptions = {
    headerTitle: 'Frequently Asked Questions',
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

export default StackNavigator({FAQs: {screen: FAQs}});