import React from 'react';
import {StackNavigator} from "react-navigation";
import {palette} from "style";
import HeaderRight from "components/HeaderRight";
import ScreenContent from "components/ScreenContent";

class About extends React.Component {

  static navigationOptions = {
    title: 'About The App',
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

export default StackNavigator({About: {screen: About}});