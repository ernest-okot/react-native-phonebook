// @flow
import React from 'react';
import {Text} from "react-native";
import {Column} from "../../style/Flex";

type Props = {
  // navigation: Navigation,
}

class Splash extends React.Component {

  props: Props;

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }

  render() {
    return <Column alignItems={'center'} justifyContent={'center'} grow={1}>
      <Text style={{color: '#000'}}>Phonebook</Text>
    </Column>
  }
}

export default Splash;