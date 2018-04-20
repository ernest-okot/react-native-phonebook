import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import InfoScreenContent from "components/InfoScreenContent";
import WhistleBlowerForm from "components/WhistleBlowerForm";
import {palette} from "style";

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
    return <InfoScreenContent>
      <WhistleBlowerForm />
    </InfoScreenContent>
  }
}

export default StackNavigator({WhistlerBlower: {screen: WhistlerBlower}});