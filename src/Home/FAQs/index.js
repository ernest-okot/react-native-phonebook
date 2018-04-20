import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import InfoScreenContent from "components/InfoScreenContent";
import QuestionAnswerAccordion from "components/QuestionAnswerAccordion";
import {palette} from "style";

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
    return <InfoScreenContent>
      <QuestionAnswerAccordion/>
    </InfoScreenContent>
  }
}

export default StackNavigator({FAQs: {screen: FAQs}});