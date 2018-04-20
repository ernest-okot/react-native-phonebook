import React from 'react';
import {StackNavigator} from "react-navigation";
import HeaderRight from "components/HeaderRight";
import InfoScreenContent from "components/InfoScreenContent";
import {palette} from "style";
import FeedbackForm from "../../../components/FeedbackForm";
import {KeyboardAvoidingView} from "react-native";
import {Grow} from "../../../style/Flex";

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
    return (
      <InfoScreenContent>
        <FeedbackForm/>
      </InfoScreenContent>
    );
  }
}

export default StackNavigator({Feedback: {screen: Feedback}});