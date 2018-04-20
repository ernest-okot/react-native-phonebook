import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import InfoScreenContent from "components/InfoScreenContent";
import {palette} from "style";
import {Text, View} from "react-native";

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
    return <InfoScreenContent>
      <View style={{margin: 10}}>
        <Text>Manage company contacts</Text>
      </View>
    </InfoScreenContent>
  }
}

export default StackNavigator({About: {screen: About}});