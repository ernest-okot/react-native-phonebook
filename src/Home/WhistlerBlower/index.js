import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import {palette} from "style";
import ScreenContent from "components/ScreenContent";

class WhistlerBlower extends React.Component {

  static navigationOptions = {
    title: 'Whistler Blower',
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

export default StackNavigator({WhistlerBlower: {screen: WhistlerBlower}});